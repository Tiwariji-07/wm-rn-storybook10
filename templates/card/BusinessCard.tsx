
import React from 'react';
import WmAnchor from '@wavemaker/app-rn-runtime/components/basic/anchor/anchor.component';
import WmAppNavbar from '@wavemaker/app-rn-runtime/components/navigation/appnavbar/appnavbar.component';
import WmCard from '@wavemaker/app-rn-runtime/components/data/card/card.component';
import WmCardContent from '@wavemaker/app-rn-runtime/components/data/card/card-content/card-content.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLeftPanel from '@wavemaker/app-rn-runtime/components/page/left-panel/left-panel.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';


export const BusinessCard = React.memo(({ $item, $index, list, fragment }) => {
    const item = $item;
    const [currentItemWidgets] = React.useState({});
    list.itemWidgets = list.itemWidgets || [];
    list.itemWidgets[$index] = currentItemWidgets;
    const [listener] = React.useState({
        onComponentInit: (c) => {
            currentItemWidgets[c.name] = c;
            // fragment.onComponentInit(c);
        },
        onComponentDestroy: (c) => {
            // fragment.onComponentDestroy(c);
            delete currentItemWidgets[c.name];
        }
    });
    // const { watch } = useWatcher(fragment.watcher);
    return (<>
        <WmListTemplate layout="media" name="listtemplate2_1" id={'list_item_' + $index + '_listtemplate2_1'} classname='list-card-template ' listener={listener}>
            <WmCard name="card2" id={'repeat_item_' + $index + '_card2'} listener={listener}>
                <WmCardContent fontunit="em" name="card_content2_1" id={'repeat_item_' + $index + '_card_content2_1'} styles={{ "root": { "fontSize": 0.8 }, "text": { "fontSize": 0.8 } }} listener={listener}  >
                    <WmLayoutgrid columns="2" name="layoutgrid2" id={'repeat_item_' + $index + '_layoutgrid2'} listener={listener}>
                        <WmGridrow name="gridrow2" id={'repeat_item_' + $index + '_gridrow2'} listener={listener}>
                            <WmGridcolumn colwidth="6" columnwidth={6} name="gridcolumn2" id={'repeat_item_' + $index + '_gridcolumn2'} classname='col-xs-6' listener={listener}>
                                <WmPicture name="Picture" picturesource="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" aspect-ratio="4:3 or 1:1" id={'repeat_item_' + $index + '_Picture'} pictureplaceholder="resources/images/imagelists/default-image.png" styles={{ "root": { "width": "100%" }, "text": {} }} listener={listener}></WmPicture>
                            </WmGridcolumn>
                            <WmGridcolumn colwidth="6" columnwidth={6} name="gridcolumn3" id={'repeat_item_' + $index + '_gridcolumn3'} styles={{ "root": { "paddingRight": 10, "paddingLeft": 10 }, "text": {} }} classname='col-xs-6' listener={listener}>
                                <WmLabel name="ID" caption="ID" whitespace="nowrap" id={'repeat_item_' + $index + '_ID'} styles={{ "root": { "marginBottom": 12 }, "text": {} }} classname='text-muted p' listener={listener}></WmLabel>
                                <WmLabel name="Name" caption="Name" whitespace="nowrap" id={'repeat_item_' + $index + '_Name'} styles={{ "root": { "marginTop": 0, "marginBottom": 0 }, "text": {} }} classname='h4' listener={listener}></WmLabel>
                                <WmLabel name="JobTitle" caption="JobTitle" whitespace="nowrap" id={'repeat_item_' + $index + '_JobTitle'} styles={{ "root": { "marginTop": 6 }, "text": {} }} classname='h5' listener={listener}></WmLabel>
                                <WmLabel name="Department" caption="Department" whitespace="nowrap" id={'repeat_item_' + $index + '_Department'} styles={{ "root": { "marginBottom": 12 }, "text": {} }} classname='p text-muted' listener={listener}></WmLabel>
                                <WmLabel name="Location" caption="Location" whitespace="nowrap" id={'repeat_item_' + $index + '_Location'} classname='text-muted p' listener={listener}></WmLabel>
                                <WmAnchor name="PhoneNumber" caption="PhoneNumber" hyperlink="tel:" whitespace="nowrap" id={'repeat_item_' + $index + '_PhoneNumber'} styles={{ "root": { "marginTop": 0, "marginBottom": 12 }, "text": {} }} classname='h5' listener={listener}></WmAnchor>
                                <WmAnchor name="EmailID" hyperlink="mailto://" caption="EmailID" whitespace="nowrap" id={'repeat_item_' + $index + '_EmailID'} classname='p text-muted' listener={listener}></WmAnchor>
                            </WmGridcolumn>
                        </WmGridrow>
                    </WmLayoutgrid>
                </WmCardContent>
            </WmCard>
        </WmListTemplate>
    </>);
});


