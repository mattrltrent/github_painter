
function fixGitUrl(url) {
    if (!url) return '';
    
    // Check and add prefix if missing
    if (!url.match(/^(https:\/\/|git@)/)) {
      url = 'https://' + url;
    }
    
    // Further refine the URL to match the correct pattern
    const pattern = /^(https:\/\/|git@)github\.com[/:]([^/]+\/[^/]+?)(\.git)?$/;
    const match = url.match(pattern);
  
    if (match) {
      const prefix = match[1];
      const userRepo = match[2];
      return `${prefix}github.com/${userRepo}.git`;
    } else {
      return null;
    }
  }
  
  function downloadFile(textSlice, graphSlice, yearSlice) {
    const arrayToWrite = [];
  
    const fixedUrl = fixGitUrl(textSlice.textFieldValue);
    if (!fixedUrl) {
      alert('Please enter correct GitHub repository URL'); // Display alert for invalid URL
      console.error('Invalid GitHub URL');
      return;
    }
  
    arrayToWrite.push(`#!/bin/bash`);
    arrayToWrite.push("echo 'GENERATING ART...'");
    arrayToWrite.push(`mkdir github_painter`);
    arrayToWrite.push(`cd github_painter`);
    arrayToWrite.push(`git init`);
    arrayToWrite.push(`git remote add origin ${fixedUrl}`); 
    arrayToWrite.push(`git pull origin main`);
    arrayToWrite.push(`touch foobar.txt`);
  
    function commitXTimes(x, date) {
      for (let i = 0; i < x; i++) {
        // create a commit on `date`
        arrayToWrite.push(`echo '${date} -> (${i})' >> foobar.txt`);
        arrayToWrite.push(`git add foobar.txt`);
        arrayToWrite.push(`git commit --date='${date}' -m '${date}'`);
      }
    }
    
    for (let i = 0; i < graphSlice.grid.length; i++) {
      // date starting at year day 1 + offset + i
      const date = new Date(yearSlice.selectedYear, 0, i + 1);
      // create `graphSlice.grid[i]` commits on `date`
      commitXTimes(graphSlice.grid[i], date);
    }
   // to increase the number of commits modify this line 
   // for example:commitXTimes(graphSlice.grid[i]*commitXTimes(graphSlice.grid[i], date); would square the initial number of commits
   // for example:commitXTimes(graphSlice.grid[i]+2, date); would add 2 to the initial number of commits
   // modify accoring to your needs
   // initial commits would be
   // space = 0
   // a(green1 = '#0D4429';)=1
   // s(green2 = '#016C31';)=2
   // d(green3 = '#26A641';)=3
   // f(green4 = '#39D353';)=4
    
    arrayToWrite.push("git push origin main --force");
    // yay, done!
    arrayToWrite.push("echo 'DONE!'");
  
    // create a Blob object with the file content
    const fileContent = arrayToWrite.join('\n');
    const blob = new Blob([fileContent], { type: 'text/plain' });
  
    // create a URL for the Blob object
    const url = URL.createObjectURL(blob);
  
    // create a link element
    const link = document.createElement('a');
    link.href = url;
    link.download = 'github_painter.sh'; // Set the desired file name
  
    // simulate a click event to trigger the download
    link.click();
  
    // clean up the URL object
    URL.revokeObjectURL(url);
  
    fetch(
      "https://hidden-coast-90561-45544df95b1b.herokuapp.com/api/v1/analytics/?kind=github-painter-script-usage&extra=" + fixedUrl,
      {
        method: "POST",
      }
    )
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
      });
  }
  
  export default downloadFile;
  
  
  
