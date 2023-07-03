<script>
    import Editor from "./components/Editor.svelte";
    import TabbedContainer from "./components/TabbedContainer.svelte";
</script>

<div>
    <Editor />
    <TabbedContainer />
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>