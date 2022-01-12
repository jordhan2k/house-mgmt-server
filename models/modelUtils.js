const { model } = require("mongoose");

const USER_COLLECTION = "users";
const HOUSE_COLLECTION = "houses";
const ITEM_COLLECTION = "items";
const COMMENT_COLLECTION = "comments";
const LOGIN_HISTORY_COLLECTION = "login_history";
const NOTIFICATION_COLLECTION = "notifications";

module.exports = {
    USER_COLLECTION,
    HOUSE_COLLECTION,
    ITEM_COLLECTION,
    COMMENT_COLLECTION,
    LOGIN_HISTORY_COLLECTION,
    NOTIFICATION_COLLECTION
}