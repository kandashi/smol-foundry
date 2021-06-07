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

    game.settings.register("smol-foundry", "folderSize", {
        name: 'Folder Height',
        scope: 'client',
        type: Number,
        default: 24,
        config: true,
        onChange: refresh
    });
});
Hooks.once('ready', refresh);

function refresh(){
    const AS = game.settings.get("smol-foundry", "actorSize")
    const SS = game.settings.get("smol-foundry", "sceneSize")
    const FS = game.settings.get("smol-foundry", "folderSize")

    document.documentElement.style.setProperty('--sceneHeight', `${SS}px`);
    document.documentElement.style.setProperty('--sceneTextHeight', `${SS}px`);
    document.documentElement.style.setProperty('--actorHeight', `${AS}px`);
    document.documentElement.style.setProperty('--actorTextHeight', `${AS-2}px`);
    document.documentElement.style.setProperty('--folderHeight', `${FS}px`);
}


