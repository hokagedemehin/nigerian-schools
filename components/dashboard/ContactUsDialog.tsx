import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@/components/index";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import Image from "next/image";
import ContactUsImg from "@/assets/images/ContactUsImg.png";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CheckIcon from "@mui/icons-material/Check";

interface IDialogForm {
  subject: string;
  message: string;
}
const ContactUsDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  // ******* SUCCESS DIALOG ******** //
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const handleClickOpenSuccessDialog = () => {
    setOpenSuccessDialog(true);
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
  };

  // ***** REACT HOOK FORM ***** //
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    reset,
  } = useForm<IDialogForm>({
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        subject: "",
        message: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IDialogForm> = (data) => {
    console.log(data);
    onClose();
    handleClickOpenSuccessDialog();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        aria-labelledby="contact-us-dialog"
        aria-describedby="contact-us-dialog-form"
      >
        <DialogTitle id="contact-us-dialog">
          <div className="flex items-center justify-end">
            {/* <Typography variant="h6" className="font-bold md:text-2xl">
              Contact Us
            </Typography> */}
            <IconButton aria-label="close" onClick={onClose}>
              <HighlightOffOutlinedIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="">
            <Image
              src={ContactUsImg}
              alt="Contact Us"
              width={500}
              height={500}
              className="h-[5rem] object-contain"
            />
          </div>
          <div className="pt-3">
            <Typography
              variant="body1"
              className="text-center font-outfit text-sm text-black"
            >
              Thank you for wanting to reach out to us, we are always happy to
              hear from you.
            </Typography>
            <div className="mt-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <div className="w-full ">
                  <Controller
                    name="subject"
                    control={control}
                    rules={{
                      required: "Subject is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        error={errors.subject ? true : false}
                        label="Subject"
                        variant="outlined"
                        // placeholder="Subject"
                        size="small"
                        fullWidth
                      />
                    )}
                  />
                  {errors.subject && (
                    <Typography
                      variant="caption"
                      className="font-outfit text-red-500"
                    >
                      {errors.subject.message}
                    </Typography>
                  )}
                </div>
                <div className="w-full ">
                  <Controller
                    name="message"
                    control={control}
                    rules={{
                      required: "Message is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Message"
                        variant="outlined"
                        error={errors.message ? true : false}
                        // placeholder="Message"
                        size="small"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    )}
                  />
                  {errors.message && (
                    <Typography
                      variant="caption"
                      className="font-outfit text-red-500"
                    >
                      {errors.message.message}
                    </Typography>
                  )}
                </div>
                <div className="mt-8 flex flex-col items-center">
                  <Button
                    type="submit"
                    color="primary"
                    className={`w-[90%] transform   transition duration-500 ease-in-out  ${
                      isSubmitting || !isValid
                        ? "cursor-not-allowed bg-gray-300 opacity-50"
                        : "rounded-lg bg-main text-white hover:bg-mainHover"
                    }`}
                    disabled={isSubmitting || !isValid}
                  >
                    <Typography
                      variant="body2"
                      className="font-outfit font-bold normal-case"
                    >
                      Submit
                    </Typography>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={openSuccessDialog}
        onClose={handleCloseSuccessDialog}
        // maxWidth="xs"
        // fullWidth
        aria-labelledby="contact-us-dialog"
        aria-describedby="contact-us-dialog-form"
      >
        <DialogContent>
          <div className="flex justify-center">
            <div className="w-fit rounded-full bg-[#C2FFD3] p-3">
              <div className="flex items-center justify-center rounded-full bg-[#34A853] p-2">
                <CheckIcon className="text-white" />
              </div>
            </div>
          </div>
          <DialogContentText className="py-4 text-center font-outfit text-gray-700">
            Your response has been submitted successfully.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactUsDialog;
