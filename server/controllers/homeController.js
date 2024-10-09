const Ticket = require ('../models/Ticket');

// controller to fetch 10 most tickets

const getRecentTickets = async(req, res) =>{
    try{
        // fetch 10 tickets on the basis of start date.
        // const recentTickets=await Ticket.find({})
        // .sort({start_date:-1})
        // .limit(10);

        const recentTickets= await Ticket.find()
        .sort({createdAt: -1})
        .limit(10)
        .populate('category', 'name');

        // send response
        res.status(200).json({
            success:true,
            count:recentTickets.length,
            data: recentTickets
        });
    } catch (error) {
        console.error(error);
        // handle any error during process
        res.status(500).json({
            success: false,
            message:"server error"
        });
    }
};

module.exports={
    getRecentTickets,
};