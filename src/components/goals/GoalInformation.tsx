type GoalInformationProps = {
  registeredGoalsCount: number;
  completedGoalCount: number;
};

const GoalInformation = ({
  registeredGoalsCount,
  completedGoalCount,
}: GoalInformationProps) => {
  return (
    <>
      <div className="mt-6 p-4 bg-gray-50 rounded">
        <p className="text-gray-600">
          目標数:　{registeredGoalsCount}個　/　完了:　{completedGoalCount}個
        </p>
      </div>
    </>
  );
};

export default GoalInformation;
