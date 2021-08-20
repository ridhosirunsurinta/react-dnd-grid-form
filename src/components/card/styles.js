const styles = () => ({
  card: {
    width: '300px',
    height: '350px',
    border: '1px solid #E9E9E9',
    background: '#FFFFFF',

    '& [data-react-beautiful-dnd-droppable]': {
      gap: '15px',
    },
  },
  cardImage: {
    width: '300px',
    height: '190px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default styles;
