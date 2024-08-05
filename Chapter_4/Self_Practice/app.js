// Question 1
/*  You are given a list of students, each with their scores in multiple subjects. Write a function that calculates the average score for each student. */
const studentList = [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [79, 95, 88] },
    { name: "Charlie", scores: [92, 91, 85] }
];

function calculateAverages(studentList) {
    return studentList.map(student => {
        const totalScores = student.scores.reduce((acc, score) => acc + score, 0);
        const averageScore = totalScores / student.scores.length;
        return { name: student.name, average: averageScore.toFixed(2) };
    });
}

console.log(calculateAverages(studentList));
