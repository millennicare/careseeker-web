// import { useMutation } from "@tanstack/react-query";
// import { useState } from "react";

// export default function CallToAction() {
// 	const [open, setOpen] = useState(false);
// 	const { mutateAsync, isPending, isSuccess } = useMutation(
// 		createWaitlistMutationOptions,
// 	);
// 	const form = useForm<CreateWaitlist>({
// 		resolver: zodResolver(CreateWaitlistSchema),
// 		defaultValues: {
// 			name: "",
// 			email: "",
// 		},
// 	});

// 	const onSubmit: SubmitHandler<CreateWaitlist> = async (data) => {
// 		await mutateAsync(data);

// 		if (isSuccess) {
// 			toast.success(
// 				"🎉 Thank you for joining the waitlist! We will be in touch with you shortly.",
// 			);
// 			setOpen(false);
// 			form.reset();
// 		}
// 	};

// 	return (
// 		<section className="bg-primary pt-16 pb-8 text-center text-white md:pt-12 md:pb-24">
// 			<div className="mx-auto max-w-3xl">
// 				<h2 className="mb-4 font-bold text-4xl">
// 					Join the Millennicare Community Today
// 				</h2>
// 				<p className="mb-8 px-3 text-lg">
// 					Ready to experience affordable, quality care? Sign up now to be among
// 					the first to access our services and take advantage of exclusive
// 					early-bird offers.
// 				</p>
// 				<Dialog open={open} onOpenChange={setOpen}>
// 					<DialogTrigger asChild>
// 						<Button variant="outline" className="text-primary">
// 							Join the waitlist
// 						</Button>
// 					</DialogTrigger>
// 					<DialogContent>
// 						<DialogHeader>
// 							<DialogTitle>Join our waitlist today!</DialogTitle>
// 						</DialogHeader>
// 						<Form {...form}>
// 							<form
// 								onSubmit={form.handleSubmit(onSubmit)}
// 								className="flex w-full max-w-lg flex-col space-y-3"
// 							>
// 								<FormField
// 									control={form.control}
// 									name="name"
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormLabel>Name</FormLabel>
// 											<FormControl>
// 												<Input
// 													placeholder="Jane Doe"
// 													{...field}
// 													autoComplete="name"
// 													type="text"
// 													required
// 												/>
// 											</FormControl>
// 											<FormMessage />
// 										</FormItem>
// 									)}
// 								/>

// 								<FormField
// 									control={form.control}
// 									name="email"
// 									render={({ field }) => (
// 										<FormItem>
// 											<FormLabel>Email</FormLabel>
// 											<FormControl>
// 												<Input
// 													placeholder="jane.doe@example.com"
// 													{...field}
// 													autoComplete="email"
// 													type="email"
// 													required
// 												/>
// 											</FormControl>
// 											<FormMessage />
// 										</FormItem>
// 									)}
// 								/>

// 								<Button type="submit" disabled={isPending}>
// 									Submit
// 								</Button>
// 							</form>
// 						</Form>
// 					</DialogContent>
// 				</Dialog>
// 			</div>
// 		</section>
// 	);
// }
