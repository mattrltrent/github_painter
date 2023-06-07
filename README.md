## GitHub Contribution Graph Painter — add a unique flair to your profile! 🎨

**[Live profile example #1:](https://github.com/mattrltrent?tab=overview&from=2018-12-01&to=2018-12-31#:~:text=January,Jan)**
<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/ex_1.JPG" width="100%" height="" style="display: block"/>

**[Live profile example #2:](https://github.com/TalentedB?tab=overview&from=2019-12-01&to=2019-12-31#:~:text=January,Jan)**
<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/ex_2.JPG" width="100%" height="" style="display: block"/>

**[Try the editor yourself:](https://github-painter.vercel.app/)**
<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/demo_4.jpg" width="100%" height="" style="display: block"/>

- **[1] ->** The year you want to push your art to. Yes, GitHub allows commits in the past, making this possible.
- **[2] ->** The URL of your GitHub repo. This is provided to you when creating the repo. For example, for this repo, the URL is `https://github.com/mattrltrent/github_painter.git`. It's usually referred to as the upstream, or remote, origin.
- **[3] ->** Downloads the script as `github_painter.sh`.
- **[4] ->** Clears the board. Hotkey: `esc`.
- **[5] ->** The palette you can use to draw on the contribution grid. Hotkeys: `space`, `a`, `s`, `d`, `f`.

### Usage

1. Add your repo URL to spot [2] seen above. **I highly reccomend using a new empty private repo in case something goes wrong.**
2. Select the year you want to paint to, for the best results, ensure this year is *free from commits* on your GitHub profile. This tool assumes you have none.
3. Paint on the canvas using the different colors, seen as [5] above.
4. Download the script, seen as [3] above. You may have to run the command `chmod 701 github_painter.sh` to give executable permission to the file. Then, run `sudo ./github_painter.sh` to run the script.

### Troubleshooting

- To delete the art, you can always delete the repository that the commits took place in. This is the easy way out. For more complex cases, refer to [this](https://stackoverflow.com/questions/448919/how-can-i-remove-a-commit-on-github) Stack Overflow question.
- If you're not seeing the art appear, please toggle the "Private Contributions" setting on your GitHub profile. It seems to help things sync up:


<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/demo_2.JPG" width="auto" height="200px" style="display: inline"/>




### Notes

- Use at your own risk, because I feel like committing a bunch of times could mess something up if used incorrectly. So, be careful, know what you're doing, and check the outputted `github_painter.sh` script before using it.

- Here's the work-in-progress [mobile version repo](https://github.com/TalentedB/GitHub-Painter).

### Feel free to create Issues or PRs!

- Issues [here](https://github.com/mattrltrent/github_painter/issues).
- PRs [here](https://github.com/mattrltrent/github_painter/pulls).
