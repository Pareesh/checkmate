function PigCellController(el) {
    var self = this;
    var selfEl = el;
    var view = new PigCellView(el);
    var model = new PigCellModel(el);
    var validMoves = undefined;

    return {
        onClick : function(prevController){
            if(prevController){
                this.getView()._click(prevController.getView());
                this.getModel().click(prevController.getModel());
                this.reset();
            }else{
                this.getView()._click(undefined);
                this.getModel().click(undefined);
            }
        },

        isSelectable : function(state){
            var currentPlayer = document.querySelector(".pig-player").getAttribute("value");
            if(currentPlayer !==  model.data.getPlayer()){
                return false
            }
            validMoves = this.getValidMoves(state);
            if(validMoves.length <= 0){
                this.reset(); 
                return false;
            }
            return true;
        },

        getValidMoves : function(state){
            if(!validMoves){
                validMoves = this.getModel().data.getValidMoves(state);
            }
            return validMoves;
        },

        reset : function(){
            validMoves = undefined;
        },

        getView : function(){
            return view;
        },

        getModel : function(){
            return model;
        }
    }
}
