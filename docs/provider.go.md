# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opentelekomcloud.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpentelekomcloudProvider <a name="OpentelekomcloudProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud opentelekomcloud}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/provider"

provider.NewOpentelekomcloudProvider(scope Construct, id *string, config OpentelekomcloudProviderConfig) OpentelekomcloudProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig">OpentelekomcloudProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName">ResetAgencyDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName">ResetAgencyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile">ResetCacertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert">ResetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject">ResetDelegatedProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId">ResetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey">ResetKey</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetAgencyDomainName` <a name="ResetAgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyDomainName"></a>

```go
func ResetAgencyDomainName()
```

##### `ResetAgencyName` <a name="ResetAgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAgencyName"></a>

```go
func ResetAgencyName()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetAuthUrl"></a>

```go
func ResetAuthUrl()
```

##### `ResetCacertFile` <a name="ResetCacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCacertFile"></a>

```go
func ResetCacertFile()
```

##### `ResetCert` <a name="ResetCert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCert"></a>

```go
func ResetCert()
```

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetCloud"></a>

```go
func ResetCloud()
```

##### `ResetDelegatedProject` <a name="ResetDelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDelegatedProject"></a>

```go
func ResetDelegatedProject()
```

##### `ResetDomainId` <a name="ResetDomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainId"></a>

```go
func ResetDomainId()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetEndpointType"></a>

```go
func ResetEndpointType()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetKey"></a>

```go
func ResetKey()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetPasscode` <a name="ResetPasscode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPasscode"></a>

```go
func ResetPasscode()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetSecurityToken` <a name="ResetSecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSecurityToken"></a>

```go
func ResetSecurityToken()
```

##### `ResetSwauth` <a name="ResetSwauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetSwauth"></a>

```go
func ResetSwauth()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTenantName` <a name="ResetTenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetTenantName"></a>

```go
func ResetTenantName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserId"></a>

```go
func ResetUserId()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.resetUserName"></a>

```go
func ResetUserName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/provider"

provider.OpentelekomcloudProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/provider"

provider.OpentelekomcloudProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/provider"

provider.OpentelekomcloudProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput">AgencyDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput">AgencyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput">AuthUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput">CacertFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput">CertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput">CloudInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput">DelegatedProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput">PasscodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput">SecurityTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput">SwauthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput">TenantNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName">AgencyDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName">AgencyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile">CacertFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert">Cert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject">DelegatedProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode">Passcode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken">SecurityToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth">Swauth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName">TenantName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AgencyDomainNameInput`<sup>Optional</sup> <a name="AgencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainNameInput"></a>

```go
func AgencyDomainNameInput() *string
```

- *Type:* *string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyNameInput"></a>

```go
func AgencyNameInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrlInput"></a>

```go
func AuthUrlInput() *string
```

- *Type:* *string

---

##### `CacertFileInput`<sup>Optional</sup> <a name="CacertFileInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFileInput"></a>

```go
func CacertFileInput() *string
```

- *Type:* *string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.certInput"></a>

```go
func CertInput() *string
```

- *Type:* *string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloudInput"></a>

```go
func CloudInput() *string
```

- *Type:* *string

---

##### `DelegatedProjectInput`<sup>Optional</sup> <a name="DelegatedProjectInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProjectInput"></a>

```go
func DelegatedProjectInput() *string
```

- *Type:* *string

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `PasscodeInput`<sup>Optional</sup> <a name="PasscodeInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcodeInput"></a>

```go
func PasscodeInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `SecurityTokenInput`<sup>Optional</sup> <a name="SecurityTokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityTokenInput"></a>

```go
func SecurityTokenInput() *string
```

- *Type:* *string

---

##### `SwauthInput`<sup>Optional</sup> <a name="SwauthInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauthInput"></a>

```go
func SwauthInput() interface{}
```

- *Type:* interface{}

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TenantNameInput`<sup>Optional</sup> <a name="TenantNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantNameInput"></a>

```go
func TenantNameInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AgencyDomainName`<sup>Optional</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyDomainName"></a>

```go
func AgencyDomainName() *string
```

- *Type:* *string

---

##### `AgencyName`<sup>Optional</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.agencyName"></a>

```go
func AgencyName() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cacertFile"></a>

```go
func CacertFile() *string
```

- *Type:* *string

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cert"></a>

```go
func Cert() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `DelegatedProject`<sup>Optional</sup> <a name="DelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.delegatedProject"></a>

```go
func DelegatedProject() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.passcode"></a>

```go
func Passcode() *string
```

- *Type:* *string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `SecurityToken`<sup>Optional</sup> <a name="SecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.securityToken"></a>

```go
func SecurityToken() *string
```

- *Type:* *string

---

##### `Swauth`<sup>Optional</sup> <a name="Swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.swauth"></a>

```go
func Swauth() interface{}
```

- *Type:* interface{}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TenantName`<sup>Optional</sup> <a name="TenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tenantName"></a>

```go
func TenantName() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpentelekomcloudProviderConfig <a name="OpentelekomcloudProviderConfig" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/provider"

&provider.OpentelekomcloudProviderConfig {
	AccessKey: *string,
	AgencyDomainName: *string,
	AgencyName: *string,
	Alias: *string,
	AuthUrl: *string,
	CacertFile: *string,
	Cert: *string,
	Cloud: *string,
	DelegatedProject: *string,
	DomainId: *string,
	DomainName: *string,
	EndpointType: *string,
	Insecure: interface{},
	Key: *string,
	MaxRetries: *f64,
	Passcode: *string,
	Password: *string,
	Region: *string,
	SecretKey: *string,
	SecurityToken: *string,
	Swauth: interface{},
	TenantId: *string,
	TenantName: *string,
	Token: *string,
	UserId: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey">AccessKey</a></code> | <code>*string</code> | The access key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName">AgencyDomainName</a></code> | <code>*string</code> | The name of domain who created the agency (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName">AgencyName</a></code> | <code>*string</code> | The name of agency. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl">AuthUrl</a></code> | <code>*string</code> | The Identity authentication URL. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile">CacertFile</a></code> | <code>*string</code> | A Custom CA certificate. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert">Cert</a></code> | <code>*string</code> | A client certificate to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud">Cloud</a></code> | <code>*string</code> | An entry in a `clouds.yaml` file to use. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject">DelegatedProject</a></code> | <code>*string</code> | The name of delegated project (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId">DomainId</a></code> | <code>*string</code> | The ID of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName">DomainName</a></code> | <code>*string</code> | The name of the Domain to scope to (Identity v3). |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#endpoint_type OpentelekomcloudProvider#endpoint_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Trust self-signed certificates. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key">Key</a></code> | <code>*string</code> | A client private key to authenticate with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | How many times HTTP connection should be retried until giving up. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode">Passcode</a></code> | <code>*string</code> | One-time MFA passcode. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region">Region</a></code> | <code>*string</code> | The OpenTelekomCloud region to connect to. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey">SecretKey</a></code> | <code>*string</code> | The secret key for API operations. You can retrieve this from the 'My Credential' section of the console. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken">SecurityToken</a></code> | <code>*string</code> | Security token to use for OBS federated authentication. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth">Swauth</a></code> | <code>interface{}</code> | Use Swift's authentication system instead of Keystone. Only used for interaction with Swift. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName">TenantName</a></code> | <code>*string</code> | The name of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token">Token</a></code> | <code>*string</code> | Authentication token to use as an alternative to username/password. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId">UserId</a></code> | <code>*string</code> | User ID to login with. |
| <code><a href="#@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName">UserName</a></code> | <code>*string</code> | Username to login with. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

The access key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#access_key OpentelekomcloudProvider#access_key}

---

##### `AgencyDomainName`<sup>Optional</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyDomainName"></a>

```go
AgencyDomainName *string
```

- *Type:* *string

The name of domain who created the agency (Identity v3).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#agency_domain_name OpentelekomcloudProvider#agency_domain_name}

---

##### `AgencyName`<sup>Optional</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.agencyName"></a>

```go
AgencyName *string
```

- *Type:* *string

The name of agency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#agency_name OpentelekomcloudProvider#agency_name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#alias OpentelekomcloudProvider#alias}

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.authUrl"></a>

```go
AuthUrl *string
```

- *Type:* *string

The Identity authentication URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#auth_url OpentelekomcloudProvider#auth_url}

---

##### `CacertFile`<sup>Optional</sup> <a name="CacertFile" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cacertFile"></a>

```go
CacertFile *string
```

- *Type:* *string

A Custom CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#cacert_file OpentelekomcloudProvider#cacert_file}

---

##### `Cert`<sup>Optional</sup> <a name="Cert" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cert"></a>

```go
Cert *string
```

- *Type:* *string

A client certificate to authenticate with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#cert OpentelekomcloudProvider#cert}

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.cloud"></a>

```go
Cloud *string
```

- *Type:* *string

An entry in a `clouds.yaml` file to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#cloud OpentelekomcloudProvider#cloud}

---

##### `DelegatedProject`<sup>Optional</sup> <a name="DelegatedProject" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.delegatedProject"></a>

```go
DelegatedProject *string
```

- *Type:* *string

The name of delegated project (Identity v3).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#delegated_project OpentelekomcloudProvider#delegated_project}

---

##### `DomainId`<sup>Optional</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

The ID of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#domain_id OpentelekomcloudProvider#domain_id}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

The name of the Domain to scope to (Identity v3).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#domain_name OpentelekomcloudProvider#domain_name}

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#endpoint_type OpentelekomcloudProvider#endpoint_type}.

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Trust self-signed certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#insecure OpentelekomcloudProvider#insecure}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

A client private key to authenticate with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#key OpentelekomcloudProvider#key}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

How many times HTTP connection should be retried until giving up.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#max_retries OpentelekomcloudProvider#max_retries}

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.passcode"></a>

```go
Passcode *string
```

- *Type:* *string

One-time MFA passcode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#passcode OpentelekomcloudProvider#passcode}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password to login with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#password OpentelekomcloudProvider#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The OpenTelekomCloud region to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#region OpentelekomcloudProvider#region}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

The secret key for API operations. You can retrieve this from the 'My Credential' section of the console.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#secret_key OpentelekomcloudProvider#secret_key}

---

##### `SecurityToken`<sup>Optional</sup> <a name="SecurityToken" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.securityToken"></a>

```go
SecurityToken *string
```

- *Type:* *string

Security token to use for OBS federated authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#security_token OpentelekomcloudProvider#security_token}

---

##### `Swauth`<sup>Optional</sup> <a name="Swauth" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.swauth"></a>

```go
Swauth interface{}
```

- *Type:* interface{}

Use Swift's authentication system instead of Keystone. Only used for interaction with Swift.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#swauth OpentelekomcloudProvider#swauth}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#tenant_id OpentelekomcloudProvider#tenant_id}

---

##### `TenantName`<sup>Optional</sup> <a name="TenantName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.tenantName"></a>

```go
TenantName *string
```

- *Type:* *string

The name of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#tenant_name OpentelekomcloudProvider#tenant_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Authentication token to use as an alternative to username/password.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#token OpentelekomcloudProvider#token}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

User ID to login with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#user_id OpentelekomcloudProvider#user_id}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.provider.OpentelekomcloudProviderConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Username to login with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud#user_name OpentelekomcloudProvider#user_name}

---



