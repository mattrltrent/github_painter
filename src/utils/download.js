
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
        arrayToWrite.push(`echo '${date.toISOString()} -> (${i})' >> foobar.txt`);
        arrayToWrite.push(`git add foobar.txt`);
        arrayToWrite.push(`git commit --date='${date.toISOString()}' -m '${date.toISOString()}'`);
      }
    }
    
    for (let i = 0; i < graphSlice.grid.length; i++) {
      // date starting at year day 1 + offset + i
      const date = new Date(yearSlice.selectedYear, 0, i + 1);
      // create `graphSlice.grid[i]` commits on `date`
      commitXTimes(graphSlice.grid[i], date);
    }
    
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
  
  
  
