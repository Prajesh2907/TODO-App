const {Router} = require ("express");
const { getTODO, saveTODO, updateTODO, deleteTODO } = require("../controllers/TODOController");

const router = Router()

router.get('/', getTODO)
router.post('/save',saveTODO)
router.post('/update',updateTODO)
router.post('/delete',deleteTODO)

module.exports = router;