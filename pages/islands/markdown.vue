<template>
  <div>
    <div class="page-header">
      <span class="badge island">Markdown Island</span>
      <h1>Markdown Islands Demo</h1>
      <p>Server-rendered markdown with no client-side JS for the parser</p>
    </div>

    <div class="card">
      <h2>📝 Markdown Editor</h2>
      <p>
        Type markdown below. The <code>markdown-it</code> library renders it
        entirely on the server via a <code>&lt;NuxtIsland&gt;</code> component —
        no parser JavaScript is shipped to the client.
      </p>

      <div class="markdown-editor">
        <label for="markdown-input">Edit markdown:</label>
        <textarea
          id="markdown-input"
          v-model="message"
          class="markdown-textarea"
          cols="30"
          rows="10"
          placeholder="Type your markdown here…"
        ></textarea>
      </div>

      <h3>Rendered Output</h3>
      <NuxtIsland name="MarkdownIsland" :props="{ message }" />
    </div>

    <div class="card">
      <h2>💡 How It Works</h2>
      <div class="highlight">
        <p>
          The <code>MarkdownIsland</code> component is a
          <strong>.server.vue</strong> file. When the <code>message</code> prop
          changes, Nuxt fetches the re-rendered HTML from the server and injects
          it into the page — the <code>markdown-it</code> library never appears
          in the client bundle.
        </p>
      </div>
      <div class="benefits-grid">
        <div class="benefit-item">
          <h4>🚀 Smaller Bundle</h4>
          <p>
            The <code>markdown-it</code> library (~223 kB) stays on the server
            and is never downloaded by the browser.
          </p>
        </div>
        <div class="benefit-item">
          <h4>🔒 Secure</h4>
          <p>
            Server-only code can safely access secrets, databases, or private
            APIs without exposing them to the client.
          </p>
        </div>
        <div class="benefit-item">
          <h4>⚡ Dynamic</h4>
          <p>
            Props changes trigger a server re-render, so the output stays
            interactive without any client-side JS for the component.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const message = ref(`# Hello World!

This markdown is rendered **entirely on the server** using \`markdown-it\`.

## Features

- No client-side JavaScript for the parser
- Dynamic re-rendering when you edit the text
- Smaller bundle size for your app

> Try editing this text to see the island update in real time!

### Code Example

\`\`\`js
const greeting = "Hello from the server!";
console.log(greeting);
\`\`\`
`);
</script>

