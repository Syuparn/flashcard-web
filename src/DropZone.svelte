<script lang="ts">
    import Dropzone from "svelte-file-dropzone";
    import { words } from "./words.js";
    import type { Word } from "./words.js";

    function isWord(obj): boolean {
        if (obj.frontWord === undefined || typeof(obj.frontWord) !== "string") {
            return false;
        }

        if (obj.backWord === undefined || typeof(obj.backWord) !== "string") {
            return false;
        }

        return true;
    }

    function parseWords(jsonStr: string): Word[] {
        const parsed = JSON.parse(jsonStr);
        if (!Array.isArray(parsed)) {
            throw new Error(`input JSON must be array: got '${jsonStr}'`);
        }

        if (parsed.length === 0) {
            throw new Error("input JSON array must not be empty");
        }

        return parsed.filter(v => isWord(v));
    }

    // TODO: add type
    function handleFilesSelect(e) {
        const { acceptedFiles, fileRejections } = e.detail;
        if (fileRejections.length > 0) {
            alert(`failed to read files: ${fileRejections.map(f => f.file.name)}`);
            return;
        }

        acceptedFiles.forEach(f => {
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    // NOTE: result must be string because readAsText is used
                    $words = parseWords(<string>reader.result);
                } catch (e) {
                    alert(`failed to read JSON: ${e.message}`);
                }
            };
            reader.readAsText(f);
        });
    }
</script>

<Dropzone accept="application/json" on:drop={handleFilesSelect}>
    <p>Drag and drop JSON file <strong>here</strong> to import your flashcards</p>
</Dropzone>
