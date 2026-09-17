import CourseCard from "./CourseCard";

function CourseSection() {
  return (
    <section>
      <h2>Course Information</h2>

      <CourseCard
        name="BCA"
        duration="3 Years"
        eligibility="10+2"
        description="Bachelor of Computer Applications focusing on computer and software technologies."
      />

      <CourseCard
        name="BBA"
        duration="3 Years"
        eligibility="10+2"
        description="Bachelor of Business Administration focusing on business and management."
      />

      <CourseCard
        name="B.Com"
        duration="3 Years"
        eligibility="10+2"
        description="Bachelor of Commerce focusing on accounting, finance and business."
      />
    </section>
  );
}

export default CourseSection;