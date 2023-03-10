# `rtsSoftwareDeploymentV1` Submodule <a name="`rtsSoftwareDeploymentV1` Submodule" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtsSoftwareDeploymentV1 <a name="RtsSoftwareDeploymentV1" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1 opentelekomcloud_rts_software_deployment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

rtssoftwaredeploymentv1.NewRtsSoftwareDeploymentV1(scope Construct, id *string, config RtsSoftwareDeploymentV1Config) RtsSoftwareDeploymentV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config">RtsSoftwareDeploymentV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config">RtsSoftwareDeploymentV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetInputValues">ResetInputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOutputValues">ResetOutputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatusReason">ResetStatusReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts"></a>

```go
func PutTimeouts(value RtsSoftwareDeploymentV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetAction"></a>

```go
func ResetAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetId"></a>

```go
func ResetId()
```

##### `ResetInputValues` <a name="ResetInputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetInputValues"></a>

```go
func ResetInputValues()
```

##### `ResetOutputValues` <a name="ResetOutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOutputValues"></a>

```go
func ResetOutputValues()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStatusReason` <a name="ResetStatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatusReason"></a>

```go
func ResetStatusReason()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

rtssoftwaredeploymentv1.RtsSoftwareDeploymentV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

rtssoftwaredeploymentv1.RtsSoftwareDeploymentV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

rtssoftwaredeploymentv1.RtsSoftwareDeploymentV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference">RtsSoftwareDeploymentV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configIdInput">ConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValuesInput">InputValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValuesInput">OutputValuesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverIdInput">ServerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReasonInput">StatusReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValues">InputValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValues">OutputValues</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverId">ServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeouts"></a>

```go
func Timeouts() RtsSoftwareDeploymentV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference">RtsSoftwareDeploymentV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configIdInput"></a>

```go
func ConfigIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputValuesInput`<sup>Optional</sup> <a name="InputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValuesInput"></a>

```go
func InputValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OutputValuesInput`<sup>Optional</sup> <a name="OutputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValuesInput"></a>

```go
func OutputValuesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverIdInput"></a>

```go
func ServerIdInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StatusReasonInput`<sup>Optional</sup> <a name="StatusReasonInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReasonInput"></a>

```go
func StatusReasonInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValues"></a>

```go
func InputValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OutputValues`<sup>Required</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValues"></a>

```go
func OutputValues() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverId"></a>

```go
func ServerId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RtsSoftwareDeploymentV1Config <a name="RtsSoftwareDeploymentV1Config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

&rtssoftwaredeploymentv1.RtsSoftwareDeploymentV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigId: *string,
	ServerId: *string,
	Action: *string,
	Id: *string,
	InputValues: *map[string]*string,
	OutputValues: *map[string]*string,
	Region: *string,
	Status: *string,
	StatusReason: *string,
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.configId">ConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#config_id RtsSoftwareDeploymentV1#config_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.serverId">ServerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#server_id RtsSoftwareDeploymentV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#action RtsSoftwareDeploymentV1#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#id RtsSoftwareDeploymentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.inputValues">InputValues</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#input_values RtsSoftwareDeploymentV1#input_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.outputValues">OutputValues</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#output_values RtsSoftwareDeploymentV1#output_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#region RtsSoftwareDeploymentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status RtsSoftwareDeploymentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.statusReason">StatusReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status_reason RtsSoftwareDeploymentV1#status_reason}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#tenant_id RtsSoftwareDeploymentV1#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.configId"></a>

```go
ConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#config_id RtsSoftwareDeploymentV1#config_id}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.serverId"></a>

```go
ServerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#server_id RtsSoftwareDeploymentV1#server_id}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#action RtsSoftwareDeploymentV1#action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#id RtsSoftwareDeploymentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputValues`<sup>Optional</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.inputValues"></a>

```go
InputValues *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#input_values RtsSoftwareDeploymentV1#input_values}.

---

##### `OutputValues`<sup>Optional</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.outputValues"></a>

```go
OutputValues *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#output_values RtsSoftwareDeploymentV1#output_values}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#region RtsSoftwareDeploymentV1#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status RtsSoftwareDeploymentV1#status}.

---

##### `StatusReason`<sup>Optional</sup> <a name="StatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.statusReason"></a>

```go
StatusReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status_reason RtsSoftwareDeploymentV1#status_reason}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#tenant_id RtsSoftwareDeploymentV1#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.timeouts"></a>

```go
Timeouts RtsSoftwareDeploymentV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#timeouts RtsSoftwareDeploymentV1#timeouts}

---

### RtsSoftwareDeploymentV1Timeouts <a name="RtsSoftwareDeploymentV1Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

&rtssoftwaredeploymentv1.RtsSoftwareDeploymentV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#create RtsSoftwareDeploymentV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#delete RtsSoftwareDeploymentV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#create RtsSoftwareDeploymentV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#delete RtsSoftwareDeploymentV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtsSoftwareDeploymentV1TimeoutsOutputReference <a name="RtsSoftwareDeploymentV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/rtssoftwaredeploymentv1"

rtssoftwaredeploymentv1.NewRtsSoftwareDeploymentV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtsSoftwareDeploymentV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



