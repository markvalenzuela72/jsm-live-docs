import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes } from "@lexical/html";
const TextToHTML = () => {
  const [editor] = useLexicalComposerContext();
  console.log(editor);
  // editor.update(() => {
  //   const editorState = editor.getEditorState();
  //   const jsonString = JSON.stringify(editorState);
  //   console.log("jsonString", jsonString);
  //   // Generate HTML from the current editor state
  //   const htmlString = $generateHtmlFromNodes(editor, null); // Adjust arguments as needed
  //   console.log("htmlString", htmlString);
  // });

  return (
    <div>
      <Button
        type="submit"
        className="gradient-blue flex gap-1 shadow-md"
        // onClick={convertHtml}
      >
        <Image src="/assets/icons/add.svg" width={24} height={24} alt="add" />
        <p className="hidden sm:block">Convert to HTML</p>
      </Button>
    </div>
  );
};

export default TextToHTML;
