import { useState} from "react";
import questions from "../../services/questions";

export default function Questions() {
    const [questionsP1, setP1] = useState([]);
    const [questionsP2, setP2] = useState([]);
    questions().then(res => {
        setP1(res.P1);
        setP2(res.P2);
    }).catch(err => console.log(err));

    const listQ = questionsP1.map((question) => (
            <li>
                <h2>{question.Q}</h2>
                <select name="select" defaultValue="A">
                    <option value="A">{question.A}</option>
                    <option value="B" selected>
                        {question.B}
                    </option>
                </select>
            </li>
        )

    );
    return (
        <div>
            <div>
                <h1>Questions </h1>
            </div>
            <div>
                <ol>{listQ}</ol>
            </div>
        </div>
    );
}