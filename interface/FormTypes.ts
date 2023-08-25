export interface INewFormInput {
  school_type: string;
  school_name: string;
  school_acronym: string;
  school_logo: string;
  school_location: string;
  year_of_establishment: string;
  school_url: string;
  number_of_faculties: string;
  number_of_students: string;
  number_of_departments: string;
  name_of_vice_chancellor: string;
  current_session: string;
  school_mission: string;
  school_vision: string;
  school_motto: string;
  school_email: string;
  post_utme_date: string;
  application_deadline: string;
  application_fee: string;
  how_to_apply: string;
  grading_system: string;
  first_class_cgpa: string;
  second_class_upper_cgpa: string;
  second_class_lower_cgpa: string;
  third_class_cgpa: string;
  pass_class_cgpa: string;
  fail_class_cgpa: string;
  withdraw: string;
  faculty_name: string;
}

export interface IAdmissionFormInput {
  department_name: string;
  post_utme_date: string;
  cut_off_mark: string;
  waec_requirements: string;
  jamb_requirements: string;
}

export interface IFacultyFormInput {
  department_name: string;
  head_of_department: string;
  number_of_years: string;
  tution_fees: string;
  acceptance_fees: string;
}