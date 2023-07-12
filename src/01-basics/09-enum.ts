enum ShapeKing {
  Circle, //0
  Square, //1
  Triangle, //2
}

const myShape = ShapeKing.Circle;

interface Circle {
  kind: ShapeKing.Circle;
  radius: number;
}

const circle1: Circle = {
  kind: ShapeKing.Circle,
  radius: 1,
};

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}

enum Grades {
  Junior = "Junior",
  Middle = "Middle",
  Senior = "Senior",
}

interface Dev {
  login: string;
  skills: string[];
  level: Grades;
}

const dev2: Dev = {
  level: Grades.Junior,
  login: "john",
  skills: ["html", "css", "js"],
};

function upGrade(user: { level: Grades }) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle;
  } else if (user.level === Grades.Middle) {
    user.level = Grades.Senior;
  }
}
