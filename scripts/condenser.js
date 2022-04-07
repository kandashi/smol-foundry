Hooks.once('init', async function() {
    game.settings.register("smol-foundry", "actorSize", {
        name: 'Entity Height',
        scope: 'client',
        type: Number,
        default: 50,
        config: true,
        onChange: refresh
    });

    game.settings.register("smol-foundry", "sceneSize", {
        name: 'Scene Height',
        scope: 'client',
        type: Number,
        default: 100,
        config: true,
        onChange: refresh
    });
});
Hooks.on("renderSidebarDirectory", refresh)

function refresh(){
    const AS = game.settings.get("smol-foundry", "actorSize")
    const SS = game.settings.get("smol-foundry", "sceneSize")
    document.querySelector("section#scenes").style.setProperty('--sidebar-scene-height', `${SS}px`);
    document.documentElement.style.setProperty('--sidebar-item-height', `${AS}px`);
}


