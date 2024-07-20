const  Cicle  = require('../models/cirlcle.model');
const { Op,DataTypes } = require('sequelize');
const sequelize = require('../config/database');


console.log('Item model in controller:', Cicle !== undefined);


const getCircle = async (req,res) =>{
  try{
// const { query } = req.query;
// console.log('Search query name:', query);
const SelectProjectInfo = `select gid,cir_name from public.circle_boundary`
// const replacements = { value: `%${query}%` }; // Adjust this as per your need
const items = await sequelize.query(SelectProjectInfo, {
                            // replacements,
                            type: sequelize.QueryTypes.SELECT // Specify the type of query
                          });
                          res.status(200).json(items);
                      } catch (error) {
                        console.error('Error executing query:', error);
                        res.status(500).json({ error: 'Internal Server Error' });
                      }
  }


// const searchItems = async (req, res) => {
//     try {
//         const { query } = req.query;
//         console.log('Search query:', query);
//         const items = await Item.findAll({
//             where: {
//                 name: {
//                     [Op.like]: `%${query}%`
//                 }
//             }
//         });
//         console.log('Items found:', items.length);
//         res.status(200).json(items);
//     } catch (error) {
//         console.error('Error in searchItems:', error);
//         res.status(500).json({ error: error.message });
//     }
// };


module.exports = { getCircle}    