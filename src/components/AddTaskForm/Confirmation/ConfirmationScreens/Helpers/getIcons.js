const getIcons = () => {
  const icons = {
    'health': {
      'fas fa-burn': {
        backgroundColor: 'gray',
        iconClassName: 'fas fa-burn',
        type: 'health',
        selected: false
      },
      'fas fa-heartbeat': {
        backgroundColor: 'gray',
        iconClassName: 'fas fa-heartbeat',
        type: 'health',
        selected: false
      },
      'fas fa-spa': {
        backgroundColor: 'gray',
        iconClassName: 'fas fa-spa',
        type: 'health',
        selected: false
      }
    },
    'fitness': {
      
    },
    'food': {

    },
    'religion': {

    }
  }

  return icons
}

export default getIcons