using System;
using System.Reflection;

namespace AngularCRUD_aspMvc5asBackend.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}