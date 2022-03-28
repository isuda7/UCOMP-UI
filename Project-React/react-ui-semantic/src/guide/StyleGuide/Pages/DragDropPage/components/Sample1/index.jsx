import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './style.scss';

const Reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
};

// fake data generator
const getQuestions = count =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${k}`,
		content: `List Item ${k}`,
	}));

class Sample1 extends Component {
	constructor(props) {
		super(props);
		this.state = { questions: getQuestions(5) };
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onDragEnd(result) {
		// dropped outside the list
		if (!result.destination) {
			//console.log("no-change");
			return;
		}

		if (result.type === "QUESTIONS") {
			// console.log(result);
			const questions = Reorder(this.state.questions,result.source.index,result.destination.index);
			this.setState({questions});
		} else {
			const questions = JSON.parse(JSON.stringify(this.state.questions));
			this.setState({questions});
		}
	}

	// Normally you would want to split things out into separate components.
	// But in this example everything is just done in one place for simplicity
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Droppable droppableId="droppable" type="QUESTIONS">
					{(provided, snapshot) => (
						<div ref={provided.innerRef} className={'dragdrop' + (snapshot.isDraggingOver ? " is_active" : "")}>
							{this.state.questions.map((question, index) => (
								<Draggable key={question.id} draggableId={question.id} index={index}>
									{(provided, snapshot) => (
										<div ref={provided.innerRef} {...provided.draggableProps} className={'dragdrop_item' + (snapshot.isDragging ? " is_active" : "")}>
											<div>{question.content}</div>
											<span {...provided.dragHandleProps}>버튼</span>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		);
	}
}

export default Sample1;
