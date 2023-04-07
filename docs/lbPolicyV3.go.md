# `lbPolicyV3` Submodule <a name="`lbPolicyV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbPolicyV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbPolicyV3 <a name="LbPolicyV3" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3 opentelekomcloud_lb_policy_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3(scope Construct, id *string, config LbPolicyV3Config) LbPolicyV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config">LbPolicyV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config">LbPolicyV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig">PutFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig">PutRedirectPoolsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig">PutRedirectUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetFixedResponseConfig">ResetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectListenerId">ResetRedirectListenerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolId">ResetRedirectPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolsConfig">ResetRedirectPoolsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrlConfig">ResetRedirectUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFixedResponseConfig` <a name="PutFixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig"></a>

```go
func PutFixedResponseConfig(value LbPolicyV3FixedResponseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

---

##### `PutRedirectPoolsConfig` <a name="PutRedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig"></a>

```go
func PutRedirectPoolsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectPoolsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRedirectUrlConfig` <a name="PutRedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig"></a>

```go
func PutRedirectUrlConfig(value LbPolicyV3RedirectUrlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRedirectUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFixedResponseConfig` <a name="ResetFixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetFixedResponseConfig"></a>

```go
func ResetFixedResponseConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetName"></a>

```go
func ResetName()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRedirectListenerId` <a name="ResetRedirectListenerId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectListenerId"></a>

```go
func ResetRedirectListenerId()
```

##### `ResetRedirectPoolId` <a name="ResetRedirectPoolId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolId"></a>

```go
func ResetRedirectPoolId()
```

##### `ResetRedirectPoolsConfig` <a name="ResetRedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectPoolsConfig"></a>

```go
func ResetRedirectPoolsConfig()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrl"></a>

```go
func ResetRedirectUrl()
```

##### `ResetRedirectUrlConfig` <a name="ResetRedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRedirectUrlConfig"></a>

```go
func ResetRedirectUrlConfig()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.resetRules"></a>

```go
func ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.LbPolicyV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.LbPolicyV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.LbPolicyV3_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference">LbPolicyV3FixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfig">RedirectPoolsConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList">LbPolicyV3RedirectPoolsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfig">RedirectUrlConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference">LbPolicyV3RedirectUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList">LbPolicyV3RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfigInput">FixedResponseConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerIdInput">ListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerIdInput">RedirectListenerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolIdInput">RedirectPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfigInput">RedirectPoolsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfigInput">RedirectUrlConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerId">ListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerId">RedirectListenerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolId">RedirectPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FixedResponseConfig`<sup>Required</sup> <a name="FixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfig"></a>

```go
func FixedResponseConfig() LbPolicyV3FixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference">LbPolicyV3FixedResponseConfigOutputReference</a>

---

##### `RedirectPoolsConfig`<sup>Required</sup> <a name="RedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfig"></a>

```go
func RedirectPoolsConfig() LbPolicyV3RedirectPoolsConfigList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList">LbPolicyV3RedirectPoolsConfigList</a>

---

##### `RedirectUrlConfig`<sup>Required</sup> <a name="RedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfig"></a>

```go
func RedirectUrlConfig() LbPolicyV3RedirectUrlConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference">LbPolicyV3RedirectUrlConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rules"></a>

```go
func Rules() LbPolicyV3RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList">LbPolicyV3RulesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FixedResponseConfigInput`<sup>Optional</sup> <a name="FixedResponseConfigInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.fixedResponseConfigInput"></a>

```go
func FixedResponseConfigInput() LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListenerIdInput`<sup>Optional</sup> <a name="ListenerIdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerIdInput"></a>

```go
func ListenerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RedirectListenerIdInput`<sup>Optional</sup> <a name="RedirectListenerIdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerIdInput"></a>

```go
func RedirectListenerIdInput() *string
```

- *Type:* *string

---

##### `RedirectPoolIdInput`<sup>Optional</sup> <a name="RedirectPoolIdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolIdInput"></a>

```go
func RedirectPoolIdInput() *string
```

- *Type:* *string

---

##### `RedirectPoolsConfigInput`<sup>Optional</sup> <a name="RedirectPoolsConfigInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolsConfigInput"></a>

```go
func RedirectPoolsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RedirectUrlConfigInput`<sup>Optional</sup> <a name="RedirectUrlConfigInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlConfigInput"></a>

```go
func RedirectUrlConfigInput() LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrlInput"></a>

```go
func RedirectUrlInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.listenerId"></a>

```go
func ListenerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RedirectListenerId`<sup>Required</sup> <a name="RedirectListenerId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectListenerId"></a>

```go
func RedirectListenerId() *string
```

- *Type:* *string

---

##### `RedirectPoolId`<sup>Required</sup> <a name="RedirectPoolId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectPoolId"></a>

```go
func RedirectPoolId() *string
```

- *Type:* *string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.redirectUrl"></a>

```go
func RedirectUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbPolicyV3Config <a name="LbPolicyV3Config" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

&lbpolicyv3.LbPolicyV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	ListenerId: *string,
	Description: *string,
	FixedResponseConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig,
	Id: *string,
	Name: *string,
	Position: *f64,
	Priority: *f64,
	ProjectId: *string,
	RedirectListenerId: *string,
	RedirectPoolId: *string,
	RedirectPoolsConfig: interface{},
	RedirectUrl: *string,
	RedirectUrlConfig: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#action LbPolicyV3#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.listenerId">ListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#listener_id LbPolicyV3#listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#description LbPolicyV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | fixed_response_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#id LbPolicyV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#name LbPolicyV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#position LbPolicyV3#position}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#priority LbPolicyV3#priority}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#project_id LbPolicyV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectListenerId">RedirectListenerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolId">RedirectPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolsConfig">RedirectPoolsConfig</a></code> | <code>interface{}</code> | redirect_pools_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrl">RedirectUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrlConfig">RedirectUrlConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | redirect_url_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#action LbPolicyV3#action}.

---

##### `ListenerId`<sup>Required</sup> <a name="ListenerId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.listenerId"></a>

```go
ListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#listener_id LbPolicyV3#listener_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#description LbPolicyV3#description}.

---

##### `FixedResponseConfig`<sup>Optional</sup> <a name="FixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.fixedResponseConfig"></a>

```go
FixedResponseConfig LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

fixed_response_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#fixed_response_config LbPolicyV3#fixed_response_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#id LbPolicyV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#name LbPolicyV3#name}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#position LbPolicyV3#position}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#priority LbPolicyV3#priority}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#project_id LbPolicyV3#project_id}.

---

##### `RedirectListenerId`<sup>Optional</sup> <a name="RedirectListenerId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectListenerId"></a>

```go
RedirectListenerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_listener_id LbPolicyV3#redirect_listener_id}.

---

##### `RedirectPoolId`<sup>Optional</sup> <a name="RedirectPoolId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolId"></a>

```go
RedirectPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_pool_id LbPolicyV3#redirect_pool_id}.

---

##### `RedirectPoolsConfig`<sup>Optional</sup> <a name="RedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectPoolsConfig"></a>

```go
RedirectPoolsConfig interface{}
```

- *Type:* interface{}

redirect_pools_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_pools_config LbPolicyV3#redirect_pools_config}

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrl"></a>

```go
RedirectUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_url LbPolicyV3#redirect_url}.

---

##### `RedirectUrlConfig`<sup>Optional</sup> <a name="RedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.redirectUrlConfig"></a>

```go
RedirectUrlConfig LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

redirect_url_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#redirect_url_config LbPolicyV3#redirect_url_config}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Config.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#rules LbPolicyV3#rules}

---

### LbPolicyV3FixedResponseConfig <a name="LbPolicyV3FixedResponseConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

&lbpolicyv3.LbPolicyV3FixedResponseConfig {
	StatusCode: *string,
	ContentType: *string,
	MessageBody: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#status_code LbPolicyV3#status_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#content_type LbPolicyV3#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.messageBody">MessageBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#message_body LbPolicyV3#message_body}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#content_type LbPolicyV3#content_type}.

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#message_body LbPolicyV3#message_body}.

---

### LbPolicyV3RedirectPoolsConfig <a name="LbPolicyV3RedirectPoolsConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

&lbpolicyv3.LbPolicyV3RedirectPoolsConfig {
	PoolId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.poolId">PoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#pool_id LbPolicyV3#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#weight LbPolicyV3#weight}. |

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#pool_id LbPolicyV3#pool_id}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#weight LbPolicyV3#weight}.

---

### LbPolicyV3RedirectUrlConfig <a name="LbPolicyV3RedirectUrlConfig" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

&lbpolicyv3.LbPolicyV3RedirectUrlConfig {
	StatusCode: *string,
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.statusCode">StatusCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#status_code LbPolicyV3#status_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#host LbPolicyV3#host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#path LbPolicyV3#path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#port LbPolicyV3#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#protocol LbPolicyV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#query LbPolicyV3#query}. |

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#status_code LbPolicyV3#status_code}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#host LbPolicyV3#host}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#path LbPolicyV3#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#port LbPolicyV3#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#protocol LbPolicyV3#protocol}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#query LbPolicyV3#query}.

---

### LbPolicyV3Rules <a name="LbPolicyV3Rules" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

&lbpolicyv3.LbPolicyV3Rules {
	CompareType: *string,
	Type: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.compareType">CompareType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#compare_type LbPolicyV3#compare_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#type LbPolicyV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#value LbPolicyV3#value}. |

---

##### `CompareType`<sup>Required</sup> <a name="CompareType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.compareType"></a>

```go
CompareType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#compare_type LbPolicyV3#compare_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#type LbPolicyV3#type}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3Rules.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_policy_v3#value LbPolicyV3#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbPolicyV3FixedResponseConfigOutputReference <a name="LbPolicyV3FixedResponseConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3FixedResponseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbPolicyV3FixedResponseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LbPolicyV3FixedResponseConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3FixedResponseConfig">LbPolicyV3FixedResponseConfig</a>

---


### LbPolicyV3RedirectPoolsConfigList <a name="LbPolicyV3RedirectPoolsConfigList" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3RedirectPoolsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbPolicyV3RedirectPoolsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get"></a>

```go
func Get(index *f64) LbPolicyV3RedirectPoolsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbPolicyV3RedirectPoolsConfigOutputReference <a name="LbPolicyV3RedirectPoolsConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3RedirectPoolsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbPolicyV3RedirectPoolsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectPoolsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbPolicyV3RedirectUrlConfigOutputReference <a name="LbPolicyV3RedirectUrlConfigOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3RedirectUrlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbPolicyV3RedirectUrlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.resetQuery"></a>

```go
func ResetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LbPolicyV3RedirectUrlConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RedirectUrlConfig">LbPolicyV3RedirectUrlConfig</a>

---


### LbPolicyV3RulesList <a name="LbPolicyV3RulesList" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3RulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LbPolicyV3RulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get"></a>

```go
func Get(index *f64) LbPolicyV3RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LbPolicyV3RulesOutputReference <a name="LbPolicyV3RulesOutputReference" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/lbpolicyv3"

lbpolicyv3.NewLbPolicyV3RulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LbPolicyV3RulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareTypeInput">CompareTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareType">CompareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompareTypeInput`<sup>Optional</sup> <a name="CompareTypeInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareTypeInput"></a>

```go
func CompareTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `CompareType`<sup>Required</sup> <a name="CompareType" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.compareType"></a>

```go
func CompareType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.lbPolicyV3.LbPolicyV3RulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



