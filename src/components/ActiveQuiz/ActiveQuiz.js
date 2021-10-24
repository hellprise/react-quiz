import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = props => (
    <div className={classes.activeQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp; 
                {/* &nbsp; - это код символа пробела (печатает пробел, ибо JSX не считывает его, если мы поставим сами после '2.') */}
                {props.question}
            </span>

            <small>{props.answerNumber} out of { props.quizLength }</small>
        </p>

        <AnswersList 
            state={props.state}
            answers = {props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)

export default ActiveQuiz