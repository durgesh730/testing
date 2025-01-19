import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import fetcher from "../../../helper/fetcher";
import { useSnackbar } from "../../../context/SnackBarContext";

export default function AccordionExpandDefault() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showSuccess, showError } = useSnackbar();

  useEffect(() => {
    fetcher.get("/job/all_jobs")
      .then((response) => {
        setJobs(response.data.data);
      })
      .catch((err) => {
        showError(err.response?.data?.message || "Failed to fetch job data");
      }).finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <div className="text-center bg-gray-100 pb-16 py-2">Loading...</div>;
  }

  if (jobs.length < 1) {
    return <div className="text-center text-red-500 bg-gray-100 pb-16 py-2">No Job Available </div>;
  }

  return (
    <div className="pb-16 py-2 bg-gray-100">
      <div className="md:max-w-[1100px] w-[90%] m-auto">
        <h2 className="my-2 md:text-4xl text-3xl text-[--bg-color] font-bold text-center">
          Check the Latest Job Openings
        </h2>
        <div className="flex justify-center mb-5">
          <div className="md:w-[46%] w-44 border-b-4 border-[--bg-color] mb-8"></div>
        </div>
        {jobs.map((job) => (
          <Accordion key={job._id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${job._id}-content`}
              id={`panel-${job._id}-header`}
            >
              <Typography
                dangerouslySetInnerHTML={{ __html: job.jobTitle }}
              />
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                dangerouslySetInnerHTML={{ __html: job.jobDescription }}
              />
              <button
                onClick={() => navigate(`/job-apply?job=${job._id}`)}
                className="md:px-6 px-3 md:py-3 py-2 font-semibold bg-[--bg-color] rounded hover:bg-[#ff4b4c] text-white mt-8"
              >
                Apply
              </button>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
