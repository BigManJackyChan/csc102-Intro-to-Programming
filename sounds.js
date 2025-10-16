// Function to play the audio file

function playSound() {
    // Grab audio element by the ID
    const audio = document.getElementById('initialdAudio')
    // Attempt to play the audio (returns a Promise in mode browser)
    audio.play().catch(err => {
        console.error('Playback failed. A user gesture may be required: ', err)
        alert('If audio did not start, click the page once and press the button again. ')
    })
}