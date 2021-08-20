import React, { Component } from 'react';
import { ListManager } from 'react-beautiful-dnd-grid';
import { ANIMALS } from './dummy-data';
import Card from '../card';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function sortList(list) {
  const list1 = list?.slice().sort((first, second) => first.order - second.order);
  const list2 = list1.map((l, index) => ({ ...l, order: index }));

  return list2;
}
 
class CardGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedList: sortList(ANIMALS),
    };
  }

  sortList = () => {
    this.setState({
      ...this.state,
      sortedList: sortList(this.state.sortedList)
    });
  };

  reorderList = (sourceIndex, destinationIndex) => {
    if (destinationIndex === sourceIndex) {
      return;
    }

    const list = this.state.sortedList;
    if (destinationIndex === 0) {
      list[sourceIndex].order = list[0].order - 1;
      this.sortList();
      return;
    }

    if (destinationIndex === list.length - 1) {
      list[sourceIndex].order = list[list.length - 1].order + 1;
      this.sortList();
      return;
    }

    if (destinationIndex < sourceIndex) {
      list[sourceIndex].order = (list[destinationIndex].order + list[destinationIndex - 1].order) / 2;
      this.sortList();
      return;
    }

    list[sourceIndex].order = (list[destinationIndex].order + list[destinationIndex + 1].order) / 2;

    this.sortList();
  };

  handleInputChange = () => {}

  render() {
    const { classes } = this.props;

    return (
      <ListManager
        className={classes.cardGrid}
        items={this.state.sortedList}
        direction="horizontal"
        maxItems={3}
        render={(animal) => {
          return (
            <Card
              animal={animal}
              handleInputChange={this.handleInputChange}
            />
          );
        }}
        onDragEnd={this.reorderList}
      />
    );
  }
}

export default withStyles(styles)(CardGrid);
