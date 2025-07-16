import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";
import { Fragment } from "react";

const AskAQuestion = () => {
  return (
    <Fragment>
      <h1 className="h1-bold text-dark100_light900">Ask A Question</h1>
      <div className="mt-8">
        <QuestionForm />
      </div>
    </Fragment>
  );
};

export default AskAQuestion;
