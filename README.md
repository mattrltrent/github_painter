## GitHub Contribution Graph Painter - β
**Add amazing art to your profile — in the present, or from years past!**


[This web version](https://github-painter.vercel.app/) · [Mobile version](https://github.com/TalentedB/GitHub-Painter)

<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/demo_3.JPG" width="" height="" style="display: inline"/>

### What everything does

<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/demo_1.jpg" width="" height="" style="display: inline"/>

- [1]. The year you want to push your art to. Yes, GitHub allows commits in the past, making this possible.
- [2]. The URL of your GitHub repo. This is provided to you when creating the repo. For example, for this repo, the URL is `https://github.com/mattrltrent/github_painter.git`. It's usually referred to as the upstream, or remote, origin.
- [3]. Downloads the script as `github_painter.sh`.
- [4]. Clears the board. Hotkey: `esc`.
- [5]. The palette you can use to draw on the contribution grid. Hotkeys: `space`, `a`, `s`, `d`, `f`.

### Usage

1. Add your repo URL to spot [2] seen above. **I highly reccomend using a new empty private repo in case something goes wrong.**
2. Select the year you want to paint to, for the best results, ensure this year is *free from commits* on your GitHub profile. This tool assumes you have none.
3. Paint on the canvas using the different colors, seen as [5] above.
4. Download the script, seen as [3] above. You may have to run the command `chmod 701 github_painter.sh` to give executable permission to the file. Then, run `sudo ./github_painter.sh` to run the script.

### Troubleshooting

- To delete the art, you can always delete the repository that the commits took place in. This is the easy way out. For more complex cases, refer to [this](https://stackoverflow.com/questions/448919/how-can-i-remove-a-commit-on-github) Stack Overflow question.
- If you're not seeing the art appear, please toggle the "Private Contributions" setting on your GitHub profile. It seems to help things sync up.


<img src="https://raw.githubusercontent.com/mattrltrent/github_painter/main/github/demo_2.JPG" width="" height="" style="display: inline"/>


### Feel free to create Issues or PRs!

- Issues [here](https://github.com/mattrltrent/github_painter/issues).
- PRs [here](https://github.com/mattrltrent/github_painter/pulls).


### Notes

Use at your own risk, because I feel like committing a bunch of times could mess something up if used incorrectly. So, be careful and check the outputted `github_painter.sh` script before using it.
