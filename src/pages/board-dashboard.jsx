import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListsTasksChart } from "../cmps/lists-tasks-chart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { ProgressProvider } from "../cmps/progress-provider";
import { MemberTasksChart } from "../cmps/member-tasks-chart";
import { ProjectDurationChart } from "../cmps/project-duration-chart";
import CloseIcon from "@mui/icons-material/Close";
import "react-circular-progressbar/dist/styles.css";

export const BoardDashboard = () => {
  const board = useSelector((state) => state.boardReducer.board);
  const navigate = useNavigate();
  const DashboardContainerRef = useRef(null);
  const DashboardStatsRef = useRef(null);

  useEffect(() => {
    DashboardContainerRef.current.scrollTo(
      0,
      DashboardStatsRef.current.offsetTop
    );
  }, []);

  const completedTasks = () => {
    const boardCards = AllBoardCards();
    const completedTasks = boardCards.filter(
      (boardCard) => boardCard.isComplete
    );
    return completedTasks.length;
  };

  const completedTasksPercent = () => {
    const boardCards = AllBoardCards();
    const allTasksCount = boardCards.length;
    const percent = Math.floor((completedTasks() / allTasksCount) * 100);
    return percent;
  };

  const openTasks = () => {
    // return 100 - this.completedTasks
    const boardCards = AllBoardCards();
    const openTasks = boardCards.filter((boardCard) => !boardCard.isComplete);
    return openTasks.length;
  };

  const openTasksPercent = () => {
    const boardCards = AllBoardCards();
    const allTasksCount = boardCards.length;
    const percent = Math.floor((openTasks() / allTasksCount) * 100);
    return percent;
  };

  const daysPassed = () => {
    const { dueDate, createdAt } = board;
    if (dueDate) {
      const days = Math.floor((Date.now() - createdAt) / 86400000);

      return days;
    }
    return 0;
  };

  const daysPassedPercent = () => {
    const { dueDate, createdAt } = board;
    if (dueDate) {
      const totalTime = dueDate - createdAt;
      return Math.floor(((Date.now() - createdAt) / totalTime) * 100);
    }
    return 0;
  };

  const projectDuration = () => {
    const { dueDate, createdAt } = board;
    return Math.floor((dueDate - createdAt) / 86400000);
  };

  const durationData = () => {
    const weeksPassed = Math.floor(daysPassed() / 7);
    const totalWeeks = Math.floor(projectDuration() / 7);
    return [weeksPassed, totalWeeks];
  };

  const AllBoardCards = () => {
    let cards = [];
    board.lists.forEach((list) =>
      list.cards.forEach((card) => cards.push(card))
    );
    return cards;
  };

  const tasksPerListData = () => {
    const tasksPerList = board.lists.reduce((acc, list) => {
      if (!acc[list.title]) acc[list.title] = 0;
      const listTasksCount = list.cards.reduce((acc, card) => {
        acc++;
        return acc;
      }, 0);

      acc[list.title] = listTasksCount;
      return acc;
    }, {});

    return tasksPerList;
  };

  const tasksPerMemberData = () => {
    const boardCards = AllBoardCards();
    const { boardMembers } = board;

    const tasksPerMember = boardMembers.reduce((acc, boardMember) => {
      if (!acc[boardMember.fullname]) acc[boardMember.fullname] = 0;

      const doneTasksCount = boardCards.reduce((acc, card) => {
        if (
          card.cardMembers.some(
            (cardMember) =>
              cardMember._id === boardMember._id && card.isComplete
          )
        )
          acc++;
        return acc;
      }, 0);

      const openTasksCount = boardCards.reduce((acc, card) => {
        if (
          card.cardMembers.some(
            (cardMember) =>
              cardMember._id === boardMember._id && !card.isComplete
          )
        )
          acc++;
        return acc;
      }, 0);

      acc[boardMember.fullname] = [doneTasksCount, openTasksCount];
      return acc;
    }, {});

    return tasksPerMember;
  };

  return (
    <section className="board-dashboard">
      <div className="window-overlay"></div>
      <CloseIcon
        className="close-btn"
        onClick={() => {
          navigate(`/board/${board._id}`);
        }}
      />
      <div className="dashboard-header flex justify-center">
        <h1>{board.title}</h1>
      </div>{" "}
      <div
        className="dashboard-container flex justify-center"
        ref={DashboardContainerRef}
      >
        <div className="left-bar flex column space-between">
          <div className="project-duration-chart">
            <ProjectDurationChart durationData={durationData()} />
          </div>

          <hr />

          <div className="list-task-chart flex align-center justify-center">
            <ListsTasksChart tasksPerListData={tasksPerListData()} />
          </div>
        </div>

        <div className="right-bar flex column space-between">
          <div
            className="dashboard-stats flex space-between"
            ref={DashboardStatsRef}
          >
            <div className="flex column align-center">
              <h1>Done Tasks</h1>
              <ProgressProvider
                valueStart={0}
                valueEnd={completedTasksPercent()}
              >
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${completedTasks()}/${AllBoardCards().length}`}
                    styles={buildStyles({
                      pathColor: `rgba(54, 162, 235, 1)`,
                      trailColor: "rgba(54, 162, 235, 0.3)",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>

            <div className="flex column align-center">
              <h1>Open Tasks</h1>
              <ProgressProvider valueStart={0} valueEnd={openTasksPercent()}>
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${openTasks()}/${AllBoardCards().length}`}
                    styles={buildStyles({
                      pathColor: `rgba(54, 162, 235, 1)`,
                      trailColor: "rgba(54, 162, 235, 0.3)",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>

            <div className="flex column align-center">
              <h1>Days Passed</h1>
              <ProgressProvider valueStart={0} valueEnd={daysPassedPercent()}>
                {(value) => (
                  <CircularProgressbar
                    value={value}
                    text={`${daysPassed()}/${projectDuration()}`}
                    styles={buildStyles({
                      pathColor: `rgba(54, 162, 235, 1)`,
                      trailColor: "rgba(54, 162, 235, 0.3)",
                    })}
                  />
                )}
              </ProgressProvider>
            </div>
          </div>

          <hr />

          <div className="member-task-chart flex justify-center align-center">
            <MemberTasksChart tasksPerMemberData={tasksPerMemberData()} />
          </div>

          <hr />
        </div>
      </div>
    </section>
  );
};
