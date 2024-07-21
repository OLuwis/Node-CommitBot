import { Octokit } from "octokit";
import { ExportedHandler } from "@cloudflare/workers-types"
import { Buffer } from "node:buffer"

export default {
  async scheduled(_event, env, _ctx): Promise<void> {
    const auth = env.TOKEN

    const owner = "oluwis"
    const repo = "node-commitbot"
    const path = "output.txt"

    const octokit = new Octokit({
      auth: auth
    })

    const file = await octokit.rest.repos.getContent({
      owner: owner,
      repo: repo,
      path: path
    })

    if (file && ("sha" && "content" in file.data)) {
      const sha = file.data.sha
      const message = `Commit: ${new Date().toUTCString()}`

      const fileContent = Buffer.from(file.data.content, "base64").toString("ascii")
      const content = Buffer.from(`${message}\n${fileContent}`).toString("base64")

      await octokit.rest.repos.createOrUpdateFileContents({
        owner: owner,
        repo: repo,
        path: path,
        sha: sha,
        content: content,
        message: message
      })

      console.log(message)
    }
  }
} satisfies ExportedHandler<Env>