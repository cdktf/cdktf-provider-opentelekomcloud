# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opentelekomcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpentelekomcloudProvider <a name="OpentelekomcloudProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs opentelekomcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new OpentelekomcloudProvider(Construct Scope, string Id, OpentelekomcloudProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName">ResetAgencyDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName">ResetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAllowReauth">ResetAllowReauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetBackoffRetryTimeout">ResetBackoffRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject">ResetDelegatedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxBackoffRetries">ResetMaxBackoffRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode">ResetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken">ResetSecurityToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth">ResetSwauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName">ResetTenantName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAgencyDomainName` <a name="ResetAgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName"></a>

```csharp
private void ResetAgencyDomainName()
```

##### `ResetAgencyName` <a name="ResetAgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName"></a>

```csharp
private void ResetAgencyName()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAllowReauth` <a name="ResetAllowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAllowReauth"></a>

```csharp
private void ResetAllowReauth()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl"></a>

```csharp
private void ResetAuthUrl()
```

##### `ResetBackoffRetryTimeout` <a name="ResetBackoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetBackoffRetryTimeout"></a>

```csharp
private void ResetBackoffRetryTimeout()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile"></a>

```csharp
private void ResetCacertFile()
```

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert"></a>

```csharp
private void ResetCert()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetDelegatedProject` <a name="ResetDelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject"></a>

```csharp
private void ResetDelegatedProject()
```

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId"></a>

```csharp
private void ResetDomainId()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetMaxBackoffRetries` <a name="ResetMaxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxBackoffRetries"></a>

```csharp
private void ResetMaxBackoffRetries()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetPasscode` <a name="ResetPasscode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode"></a>

```csharp
private void ResetPasscode()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetSecurityToken` <a name="ResetSecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken"></a>

```csharp
private void ResetSecurityToken()
```

##### `ResetSwauth` <a name="ResetSwauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth"></a>

```csharp
private void ResetSwauth()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTenantName` <a name="ResetTenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName"></a>

```csharp
private void ResetTenantName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName"></a>

```csharp
private void ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

OpentelekomcloudProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

OpentelekomcloudProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

OpentelekomcloudProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

OpentelekomcloudProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpentelekomcloudProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpentelekomcloudProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpentelekomcloudProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpentelekomcloudProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput">AgencyDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput">AgencyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauthInput">AllowReauthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput">AuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput">BackoffRetryTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput">DelegatedProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput">MaxBackoffRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput">PasscodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput">SecurityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput">SwauthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput">TenantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName">AgencyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauth">AllowReauth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout">BackoffRetryTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile">CacertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject">DelegatedProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries">MaxBackoffRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode">Passcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken">SecurityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth">Swauth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName">TenantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AgencyDomainNameInput`<sup>Optional</sup> <a name="AgencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput"></a>

```csharp
public string AgencyDomainNameInput { get; }
```

- *Type:* string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput"></a>

```csharp
public string AgencyNameInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AllowReauthInput`<sup>Optional</sup> <a name="AllowReauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauthInput"></a>

```csharp
public object AllowReauthInput { get; }
```

- *Type:* object

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput"></a>

```csharp
public string AuthUrlInput { get; }
```

- *Type:* string

---

##### `BackoffRetryTimeoutInput`<sup>Optional</sup> <a name="BackoffRetryTimeoutInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeoutInput"></a>

```csharp
public double BackoffRetryTimeoutInput { get; }
```

- *Type:* double

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput"></a>

```csharp
public string CacertFileInput { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `DelegatedProjectInput`<sup>Optional</sup> <a name="DelegatedProjectInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput"></a>

```csharp
public string DelegatedProjectInput { get; }
```

- *Type:* string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `MaxBackoffRetriesInput`<sup>Optional</sup> <a name="MaxBackoffRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetriesInput"></a>

```csharp
public double MaxBackoffRetriesInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `PasscodeInput`<sup>Optional</sup> <a name="PasscodeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput"></a>

```csharp
public string PasscodeInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `SecurityTokenInput`<sup>Optional</sup> <a name="SecurityTokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput"></a>

```csharp
public string SecurityTokenInput { get; }
```

- *Type:* string

---

##### `SwauthInput`<sup>Optional</sup> <a name="SwauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput"></a>

```csharp
public object SwauthInput { get; }
```

- *Type:* object

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput"></a>

```csharp
public string TenantNameInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AgencyDomainName`<sup>Optional</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; }
```

- *Type:* string

---

##### `AgencyName`<sup>Optional</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName"></a>

```csharp
public string AgencyName { get; }
```

- *Type:* string

---

##### `AllowReauth`<sup>Optional</sup> <a name="AllowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.allowReauth"></a>

```csharp
public object AllowReauth { get; }
```

- *Type:* object

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `BackoffRetryTimeout`<sup>Optional</sup> <a name="BackoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.backoffRetryTimeout"></a>

```csharp
public double BackoffRetryTimeout { get; }
```

- *Type:* double

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile"></a>

```csharp
public string CacertFile { get; }
```

- *Type:* string

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `DelegatedProject`<sup>Optional</sup> <a name="DelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject"></a>

```csharp
public string DelegatedProject { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `MaxBackoffRetries`<sup>Optional</sup> <a name="MaxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxBackoffRetries"></a>

```csharp
public double MaxBackoffRetries { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode"></a>

```csharp
public string Passcode { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SecurityToken`<sup>Optional</sup> <a name="SecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken"></a>

```csharp
public string SecurityToken { get; }
```

- *Type:* string

---

##### `Swauth`<sup>Optional</sup> <a name="Swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth"></a>

```csharp
public object Swauth { get; }
```

- *Type:* object

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TenantName`<sup>Optional</sup> <a name="TenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName"></a>

```csharp
public string TenantName { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpentelekomcloudProviderConfig <a name="OpentelekomcloudProviderConfig" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new OpentelekomcloudProviderConfig {
    string AccessKey = null,
    string AgencyDomainName = null,
    string AgencyName = null,
    string Alias = null,
    object AllowReauth = null,
    string AuthUrl = null,
    double BackoffRetryTimeout = null,
    string CacertFile = null,
    string Cert = null,
    string Cloud = null,
    string DelegatedProject = null,
    string DomainId = null,
    string DomainName = null,
    string EndpointType = null,
    object Insecure = null,
    string Key = null,
    double MaxBackoffRetries = null,
    double MaxRetries = null,
    string Passcode = null,
    string Password = null,
    string Region = null,
    string SecretKey = null,
    string SecurityToken = null,
    object Swauth = null,
    string TenantId = null,
    string TenantName = null,
    string Token = null,
    string UserId = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName">AgencyDomainName</a></code> | <code>string</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName">AgencyName</a></code> | <code>string</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.allowReauth">AllowReauth</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#allow_reauth OpentelekomcloudProvider#allow_reauth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl">AuthUrl</a></code> | <code>string</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout">BackoffRetryTimeout</a></code> | <code>double</code> | Timeout in seconds for backoff retry. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile">CacertFile</a></code> | <code>string</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert">Cert</a></code> | <code>string</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud">Cloud</a></code> | <code>string</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject">DelegatedProject</a></code> | <code>string</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId">DomainId</a></code> | <code>string</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName">DomainName</a></code> | <code>string</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType">EndpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key">Key</a></code> | <code>string</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries">MaxBackoffRetries</a></code> | <code>double</code> | How many times HTTP request should be retried when rate limit reached. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode">Passcode</a></code> | <code>string</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password">Password</a></code> | <code>string</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region">Region</a></code> | <code>string</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken">SecurityToken</a></code> | <code>string</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth">Swauth</a></code> | <code>object</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId">TenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName">TenantName</a></code> | <code>string</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token">Token</a></code> | <code>string</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId">UserId</a></code> | <code>string</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName">UserName</a></code> | <code>string</code> | Username to login with. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#access_key OpentelekomcloudProvider#access_key}

---

##### `AgencyDomainName`<sup>Optional</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName"></a>

```csharp
public string AgencyDomainName { get; set; }
```

- *Type:* string

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `AgencyName`<sup>Optional</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName"></a>

```csharp
public string AgencyName { get; set; }
```

- *Type:* string

The name of agency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#agency_name OpentelekomcloudProvider#agency_name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#alias OpentelekomcloudProvider#alias}

---

##### `AllowReauth`<sup>Optional</sup> <a name="AllowReauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.allowReauth"></a>

```csharp
public object AllowReauth { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#allow_reauth OpentelekomcloudProvider#allow_reauth}.

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl"></a>

```csharp
public string AuthUrl { get; set; }
```

- *Type:* string

The Identity authentication URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#auth_url OpentelekomcloudProvider#auth_url}

---

##### `BackoffRetryTimeout`<sup>Optional</sup> <a name="BackoffRetryTimeout" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.backoffRetryTimeout"></a>

```csharp
public double BackoffRetryTimeout { get; set; }
```

- *Type:* double

Timeout in seconds for backoff retry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#backoff_retry_timeout OpentelekomcloudProvider#backoff_retry_timeout}

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile"></a>

```csharp
public string CacertFile { get; set; }
```

- *Type:* string

A Custom CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#cert OpentelekomcloudProvider#cert}

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#cloud OpentelekomcloudProvider#cloud}

---

##### `DelegatedProject`<sup>Optional</sup> <a name="DelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject"></a>

```csharp
public string DelegatedProject { get; set; }
```

- *Type:* string

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#domain_id OpentelekomcloudProvider#domain_id}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#domain_name OpentelekomcloudProvider#domain_name}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#insecure OpentelekomcloudProvider#insecure}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#key OpentelekomcloudProvider#key}

---

##### `MaxBackoffRetries`<sup>Optional</sup> <a name="MaxBackoffRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxBackoffRetries"></a>

```csharp
public double MaxBackoffRetries { get; set; }
```

- *Type:* double

How many times HTTP request should be retried when rate limit reached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#max_backoff_retries OpentelekomcloudProvider#max_backoff_retries}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#max_retries OpentelekomcloudProvider#max_retries}

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode"></a>

```csharp
public string Passcode { get; set; }
```

- *Type:* string

One-time MFA passcode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#passcode OpentelekomcloudProvider#passcode}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#password OpentelekomcloudProvider#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#region OpentelekomcloudProvider#region}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#secret_key OpentelekomcloudProvider#secret_key}

---

##### `SecurityToken`<sup>Optional</sup> <a name="SecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken"></a>

```csharp
public string SecurityToken { get; set; }
```

- *Type:* string

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#security_token OpentelekomcloudProvider#security_token}

---

##### `Swauth`<sup>Optional</sup> <a name="Swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth"></a>

```csharp
public object Swauth { get; set; }
```

- *Type:* object

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#swauth OpentelekomcloudProvider#swauth}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `TenantName`<sup>Optional</sup> <a name="TenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName"></a>

```csharp
public string TenantName { get; set; }
```

- *Type:* string

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#token OpentelekomcloudProvider#token}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

User ID to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#user_id OpentelekomcloudProvider#user_id}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Username to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs#user_name OpentelekomcloudProvider#user_name}

---



