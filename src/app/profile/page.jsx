
const page = async() => {
    const { getUser } = getKindeServerSession();
        const user = await getUser();
        console.log(user)
    return (
        <div>
            <h2 className="my-4 text-3xl font-bold text-center">Hi, Welcome to your porfile</h2>
        </div>
    );
};

export default page;