// ================================
// BACKGROUND MUSIC
// ================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {

    musicButton.addEventListener("click", async () => {

        try {

            if (music.paused) {

                await music.play();

                musicButton.textContent = "♫ Music On";

            } else {

                music.pause();

                musicButton.textContent = "♫ Music Off";

            }

        } catch (error) {

            console.error("Music could not play:", error);

            musicButton.textContent = "Music Error";

            alert(
                "The music could not play. Make sure your file is named music.mp3 and is inside the audio folder."
            );
        }

    });

}


// ================================
// LETTER TYPING EFFECT
// ================================

const paragraphs = document.querySelectorAll("#letterText p");

// Hide all paragraphs
paragraphs.forEach((paragraph) => {
    paragraph.style.visibility = "hidden";
});


// Wait function
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    });
}


// Type one paragraph
async function typeParagraph(paragraph) {

    paragraph.style.visibility = "visible";

    // Get the original text
    const text = paragraph.textContent;

    // Empty the paragraph
    paragraph.textContent = "";

    // Type character by character
    for (const character of text) {

        paragraph.textContent += character;

        await wait(25);
    }

    // Pause before next paragraph
    await wait(700);
}


// Type paragraphs one at a time
async function startTyping() {

    for (const paragraph of paragraphs) {

        await typeParagraph(paragraph);

    }

}


// Start typing
startTyping();