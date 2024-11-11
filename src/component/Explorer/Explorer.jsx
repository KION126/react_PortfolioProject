import React from 'react';
import fileStructureData from '../../jsonData/FileStructureData.json';
import ExplorerItem from './ExplorerItem';

const FileExplorer = React.memo(() => {
    return (
        <div>
            <div className='w-full px-4 py-2 text-[11px]'>
                탐색기
            </div>
            <ExplorerItem item={fileStructureData} title={fileStructureData.title} koTitle={fileStructureData.koTitle}padding='0'/>
        </div>
    );
});

export default FileExplorer;
