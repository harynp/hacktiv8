function checkPalindrom(palindrom)
{

    for( var i = palindrom.length; i > 0; i-- )
    {
        if( palindrom[i] = palindrom.charAt(palindrom.length)-1 )
        {
           return 'true';
        }else{
           return 'false';
        }
    }
}
checkPalindrom('wordthatwillbechecked');