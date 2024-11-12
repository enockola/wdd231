import choices from "./choices.mjs";

function storyTemplate(story) {
    return `
    <h2>${story.title}</h2>
    `
}

function stepTemplate(step) {
    return `
        <section class="story">
            <p>${step.start.text}</p>
            <button id="c1">${step.start[0].text}</button>
            <button id="c2">${step.start[0].text}</button>
            <button id="c3">${step.start[0].text}</button>
        </section>
    `
}

function setupStory(story) {
    const importHeaderTemplate = document.querySelector("#main");
    importHeaderTemplate.innerHTML = storyTemplate(story);
    importHeaderTemplate.innerHTML = stepTemplate(story.start);
}

setupStory(choices);