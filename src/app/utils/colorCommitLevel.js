// Helper function to get the color based on the commit level
const getColorForCommitLevel = (commitLevel) => {
    switch (commitLevel) {
      case 1:
        return '#c6e48b';
      case 2:
        return '#7bc96f';
      case 3:
        return '#239a3b';
      case 4:
        return '#196127';
      default:
        return '#828282';
    }
};
  
export default getColorForCommitLevel;