export interface productos{

    id:number;
    name:string;
    type:string;
    desc:string;
    atk:number;
    def:number;
    level:number;
    race:string;
    attribute:string;
    card_images:[{
        id:number;
        image_url:string;
        image_url_small:string;
    }];
}