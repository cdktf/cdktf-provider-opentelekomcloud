# `csbsBackupPolicyV1` Submodule <a name="`csbsBackupPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CsbsBackupPolicyV1 <a name="CsbsBackupPolicyV1" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1(scope Construct, id *string, config CsbsBackupPolicyV1Config) CsbsBackupPolicyV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config">CsbsBackupPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config">CsbsBackupPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation">PutScheduledOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetCommon">ResetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetProviderId">ResetProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource"></a>

```go
func PutResource(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putResource.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScheduledOperation` <a name="PutScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation"></a>

```go
func PutScheduledOperation(value CsbsBackupPolicyV1ScheduledOperation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putScheduledOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts"></a>

```go
func PutTimeouts(value CsbsBackupPolicyV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

---

##### `ResetCommon` <a name="ResetCommon" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetCommon"></a>

```go
func ResetCommon()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderId` <a name="ResetProviderId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetProviderId"></a>

```go
func ResetProviderId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.CsbsBackupPolicyV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.CsbsBackupPolicyV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.CsbsBackupPolicyV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList">CsbsBackupPolicyV1ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperation">ScheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference">CsbsBackupPolicyV1ScheduledOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList">CsbsBackupPolicyV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference">CsbsBackupPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.commonInput">CommonInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resourceInput">ResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperationInput">ScheduledOperationInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.common">Common</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resource"></a>

```go
func Resource() CsbsBackupPolicyV1ResourceList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList">CsbsBackupPolicyV1ResourceList</a>

---

##### `ScheduledOperation`<sup>Required</sup> <a name="ScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperation"></a>

```go
func ScheduledOperation() CsbsBackupPolicyV1ScheduledOperationOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference">CsbsBackupPolicyV1ScheduledOperationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tags"></a>

```go
func Tags() CsbsBackupPolicyV1TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList">CsbsBackupPolicyV1TagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeouts"></a>

```go
func Timeouts() CsbsBackupPolicyV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference">CsbsBackupPolicyV1TimeoutsOutputReference</a>

---

##### `CommonInput`<sup>Optional</sup> <a name="CommonInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.commonInput"></a>

```go
func CommonInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.resourceInput"></a>

```go
func ResourceInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduledOperationInput`<sup>Optional</sup> <a name="ScheduledOperationInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.scheduledOperationInput"></a>

```go
func ScheduledOperationInput() CsbsBackupPolicyV1ScheduledOperation
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.common"></a>

```go
func Common() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CsbsBackupPolicyV1Config <a name="CsbsBackupPolicyV1Config" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

&csbsbackuppolicyv1.CsbsBackupPolicyV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Resource: interface{},
	ScheduledOperation: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation,
	Common: *map[string]*string,
	Description: *string,
	Id: *string,
	ProviderId: *string,
	Region: *string,
	Tags: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.resource">Resource</a></code> | <code>interface{}</code> | resource block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.scheduledOperation">ScheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | scheduled_operation block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.common">Common</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.providerId">ProviderId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.resource"></a>

```go
Resource interface{}
```

- *Type:* interface{}

resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#resource CsbsBackupPolicyV1#resource}

---

##### `ScheduledOperation`<sup>Required</sup> <a name="ScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.scheduledOperation"></a>

```go
ScheduledOperation CsbsBackupPolicyV1ScheduledOperation
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

scheduled_operation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#scheduled_operation CsbsBackupPolicyV1#scheduled_operation}

---

##### `Common`<sup>Optional</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.common"></a>

```go
Common *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#common CsbsBackupPolicyV1#common}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderId`<sup>Optional</sup> <a name="ProviderId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#provider_id CsbsBackupPolicyV1#provider_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#region CsbsBackupPolicyV1#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#tags CsbsBackupPolicyV1#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Config.property.timeouts"></a>

```go
Timeouts CsbsBackupPolicyV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts">CsbsBackupPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#timeouts CsbsBackupPolicyV1#timeouts}

---

### CsbsBackupPolicyV1Resource <a name="CsbsBackupPolicyV1Resource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

&csbsbackuppolicyv1.CsbsBackupPolicyV1Resource {
	Id: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#type CsbsBackupPolicyV1#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#id CsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Resource.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#type CsbsBackupPolicyV1#type}.

---

### CsbsBackupPolicyV1ScheduledOperation <a name="CsbsBackupPolicyV1ScheduledOperation" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

&csbsbackuppolicyv1.CsbsBackupPolicyV1ScheduledOperation {
	OperationType: *string,
	TriggerPattern: *string,
	DayBackups: *f64,
	Description: *string,
	Enabled: interface{},
	MaxBackups: *f64,
	MonthBackups: *f64,
	Name: *string,
	Permanent: interface{},
	RetentionDurationDays: *f64,
	Timezone: *string,
	WeekBackups: *f64,
	YearBackups: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.operationType">OperationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#operation_type CsbsBackupPolicyV1#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.triggerPattern">TriggerPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.dayBackups">DayBackups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#day_backups CsbsBackupPolicyV1#day_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#enabled CsbsBackupPolicyV1#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.maxBackups">MaxBackups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#max_backups CsbsBackupPolicyV1#max_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.monthBackups">MonthBackups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#month_backups CsbsBackupPolicyV1#month_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.permanent">Permanent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#permanent CsbsBackupPolicyV1#permanent}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#timezone CsbsBackupPolicyV1#timezone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.weekBackups">WeekBackups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#week_backups CsbsBackupPolicyV1#week_backups}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.yearBackups">YearBackups</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#year_backups CsbsBackupPolicyV1#year_backups}. |

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.operationType"></a>

```go
OperationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#operation_type CsbsBackupPolicyV1#operation_type}.

---

##### `TriggerPattern`<sup>Required</sup> <a name="TriggerPattern" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.triggerPattern"></a>

```go
TriggerPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#trigger_pattern CsbsBackupPolicyV1#trigger_pattern}.

---

##### `DayBackups`<sup>Optional</sup> <a name="DayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.dayBackups"></a>

```go
DayBackups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#day_backups CsbsBackupPolicyV1#day_backups}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#description CsbsBackupPolicyV1#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#enabled CsbsBackupPolicyV1#enabled}.

---

##### `MaxBackups`<sup>Optional</sup> <a name="MaxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.maxBackups"></a>

```go
MaxBackups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#max_backups CsbsBackupPolicyV1#max_backups}.

---

##### `MonthBackups`<sup>Optional</sup> <a name="MonthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.monthBackups"></a>

```go
MonthBackups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#month_backups CsbsBackupPolicyV1#month_backups}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#name CsbsBackupPolicyV1#name}.

---

##### `Permanent`<sup>Optional</sup> <a name="Permanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.permanent"></a>

```go
Permanent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#permanent CsbsBackupPolicyV1#permanent}.

---

##### `RetentionDurationDays`<sup>Optional</sup> <a name="RetentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.retentionDurationDays"></a>

```go
RetentionDurationDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#retention_duration_days CsbsBackupPolicyV1#retention_duration_days}.

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#timezone CsbsBackupPolicyV1#timezone}.

---

##### `WeekBackups`<sup>Optional</sup> <a name="WeekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.weekBackups"></a>

```go
WeekBackups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#week_backups CsbsBackupPolicyV1#week_backups}.

---

##### `YearBackups`<sup>Optional</sup> <a name="YearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation.property.yearBackups"></a>

```go
YearBackups *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#year_backups CsbsBackupPolicyV1#year_backups}.

---

### CsbsBackupPolicyV1Tags <a name="CsbsBackupPolicyV1Tags" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

&csbsbackuppolicyv1.CsbsBackupPolicyV1Tags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#key CsbsBackupPolicyV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#value CsbsBackupPolicyV1#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#key CsbsBackupPolicyV1#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Tags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#value CsbsBackupPolicyV1#value}.

---

### CsbsBackupPolicyV1Timeouts <a name="CsbsBackupPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

&csbsbackuppolicyv1.CsbsBackupPolicyV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#create CsbsBackupPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#delete CsbsBackupPolicyV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#create CsbsBackupPolicyV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/csbs_backup_policy_v1#delete CsbsBackupPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CsbsBackupPolicyV1ResourceList <a name="CsbsBackupPolicyV1ResourceList" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1ResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsbsBackupPolicyV1ResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get"></a>

```go
func Get(index *f64) CsbsBackupPolicyV1ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsbsBackupPolicyV1ResourceOutputReference <a name="CsbsBackupPolicyV1ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1ResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsbsBackupPolicyV1ResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsbsBackupPolicyV1ScheduledOperationOutputReference <a name="CsbsBackupPolicyV1ScheduledOperationOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1ScheduledOperationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsbsBackupPolicyV1ScheduledOperationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDayBackups">ResetDayBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMaxBackups">ResetMaxBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMonthBackups">ResetMonthBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetPermanent">ResetPermanent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetRetentionDurationDays">ResetRetentionDurationDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetWeekBackups">ResetWeekBackups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetYearBackups">ResetYearBackups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayBackups` <a name="ResetDayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDayBackups"></a>

```go
func ResetDayBackups()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetMaxBackups` <a name="ResetMaxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMaxBackups"></a>

```go
func ResetMaxBackups()
```

##### `ResetMonthBackups` <a name="ResetMonthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetMonthBackups"></a>

```go
func ResetMonthBackups()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPermanent` <a name="ResetPermanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetPermanent"></a>

```go
func ResetPermanent()
```

##### `ResetRetentionDurationDays` <a name="ResetRetentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetRetentionDurationDays"></a>

```go
func ResetRetentionDurationDays()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetWeekBackups` <a name="ResetWeekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetWeekBackups"></a>

```go
func ResetWeekBackups()
```

##### `ResetYearBackups` <a name="ResetYearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.resetYearBackups"></a>

```go
func ResetYearBackups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId">TriggerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName">TriggerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackupsInput">DayBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackupsInput">MaxBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackupsInput">MonthBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationTypeInput">OperationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanentInput">PermanentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDaysInput">RetentionDurationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPatternInput">TriggerPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackupsInput">WeekBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackupsInput">YearBackupsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackups">DayBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups">MaxBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackups">MonthBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType">OperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent">Permanent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays">RetentionDurationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern">TriggerPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackups">WeekBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackups">YearBackups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TriggerId`<sup>Required</sup> <a name="TriggerId" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId"></a>

```go
func TriggerId() *string
```

- *Type:* *string

---

##### `TriggerName`<sup>Required</sup> <a name="TriggerName" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName"></a>

```go
func TriggerName() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `DayBackupsInput`<sup>Optional</sup> <a name="DayBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackupsInput"></a>

```go
func DayBackupsInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxBackupsInput`<sup>Optional</sup> <a name="MaxBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackupsInput"></a>

```go
func MaxBackupsInput() *f64
```

- *Type:* *f64

---

##### `MonthBackupsInput`<sup>Optional</sup> <a name="MonthBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackupsInput"></a>

```go
func MonthBackupsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperationTypeInput`<sup>Optional</sup> <a name="OperationTypeInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationTypeInput"></a>

```go
func OperationTypeInput() *string
```

- *Type:* *string

---

##### `PermanentInput`<sup>Optional</sup> <a name="PermanentInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanentInput"></a>

```go
func PermanentInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionDurationDaysInput`<sup>Optional</sup> <a name="RetentionDurationDaysInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDaysInput"></a>

```go
func RetentionDurationDaysInput() *f64
```

- *Type:* *f64

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TriggerPatternInput`<sup>Optional</sup> <a name="TriggerPatternInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPatternInput"></a>

```go
func TriggerPatternInput() *string
```

- *Type:* *string

---

##### `WeekBackupsInput`<sup>Optional</sup> <a name="WeekBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackupsInput"></a>

```go
func WeekBackupsInput() *f64
```

- *Type:* *f64

---

##### `YearBackupsInput`<sup>Optional</sup> <a name="YearBackupsInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackupsInput"></a>

```go
func YearBackupsInput() *f64
```

- *Type:* *f64

---

##### `DayBackups`<sup>Required</sup> <a name="DayBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.dayBackups"></a>

```go
func DayBackups() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `MaxBackups`<sup>Required</sup> <a name="MaxBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups"></a>

```go
func MaxBackups() *f64
```

- *Type:* *f64

---

##### `MonthBackups`<sup>Required</sup> <a name="MonthBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.monthBackups"></a>

```go
func MonthBackups() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType"></a>

```go
func OperationType() *string
```

- *Type:* *string

---

##### `Permanent`<sup>Required</sup> <a name="Permanent" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent"></a>

```go
func Permanent() interface{}
```

- *Type:* interface{}

---

##### `RetentionDurationDays`<sup>Required</sup> <a name="RetentionDurationDays" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays"></a>

```go
func RetentionDurationDays() *f64
```

- *Type:* *f64

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `TriggerPattern`<sup>Required</sup> <a name="TriggerPattern" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern"></a>

```go
func TriggerPattern() *string
```

- *Type:* *string

---

##### `WeekBackups`<sup>Required</sup> <a name="WeekBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.weekBackups"></a>

```go
func WeekBackups() *f64
```

- *Type:* *f64

---

##### `YearBackups`<sup>Required</sup> <a name="YearBackups" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.yearBackups"></a>

```go
func YearBackups() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue"></a>

```go
func InternalValue() CsbsBackupPolicyV1ScheduledOperation
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1ScheduledOperation">CsbsBackupPolicyV1ScheduledOperation</a>

---


### CsbsBackupPolicyV1TagsList <a name="CsbsBackupPolicyV1TagsList" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1TagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CsbsBackupPolicyV1TagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get"></a>

```go
func Get(index *f64) CsbsBackupPolicyV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsbsBackupPolicyV1TagsOutputReference <a name="CsbsBackupPolicyV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1TagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CsbsBackupPolicyV1TagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CsbsBackupPolicyV1TimeoutsOutputReference <a name="CsbsBackupPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/csbsbackuppolicyv1"

csbsbackuppolicyv1.NewCsbsBackupPolicyV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CsbsBackupPolicyV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.csbsBackupPolicyV1.CsbsBackupPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



