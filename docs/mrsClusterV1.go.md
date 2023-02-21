# `mrsClusterV1` Submodule <a name="`mrsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsClusterV1 <a name="MrsClusterV1" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1(scope Construct, id *string, config MrsClusterV1Config) MrsClusterV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs">PutAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts">PutBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList">PutComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs">ResetAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts">ResetBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret">ResetClusterAdminSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount">ResetCoreDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize">ResetCoreDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType">ResetCoreDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection">ResetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount">ResetMasterDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize">ResetMasterDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType">ResetMasterDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAddJobs` <a name="PutAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs"></a>

```go
func PutAddJobs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBootstrapScripts` <a name="PutBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts"></a>

```go
func PutBootstrapScripts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutComponentList` <a name="PutComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList"></a>

```go
func PutComponentList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts"></a>

```go
func PutTimeouts(value MrsClusterV1Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `ResetAddJobs` <a name="ResetAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs"></a>

```go
func ResetAddJobs()
```

##### `ResetBootstrapScripts` <a name="ResetBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts"></a>

```go
func ResetBootstrapScripts()
```

##### `ResetClusterAdminSecret` <a name="ResetClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret"></a>

```go
func ResetClusterAdminSecret()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetCoreDataVolumeCount` <a name="ResetCoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount"></a>

```go
func ResetCoreDataVolumeCount()
```

##### `ResetCoreDataVolumeSize` <a name="ResetCoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize"></a>

```go
func ResetCoreDataVolumeSize()
```

##### `ResetCoreDataVolumeType` <a name="ResetCoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType"></a>

```go
func ResetCoreDataVolumeType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId"></a>

```go
func ResetId()
```

##### `ResetLogCollection` <a name="ResetLogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection"></a>

```go
func ResetLogCollection()
```

##### `ResetMasterDataVolumeCount` <a name="ResetMasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount"></a>

```go
func ResetMasterDataVolumeCount()
```

##### `ResetMasterDataVolumeSize` <a name="ResetMasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize"></a>

```go
func ResetMasterDataVolumeSize()
```

##### `ResetMasterDataVolumeType` <a name="ResetMasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType"></a>

```go
func ResetMasterDataVolumeType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize"></a>

```go
func ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType"></a>

```go
func ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.MrsClusterV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.MrsClusterV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.MrsClusterV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs">AddJobs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName">AvailableZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts">BootstrapScripts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime">ChargingStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState">ClusterState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList">ComponentList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList">MrsClusterV1ComponentListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId">CoreNodeProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId">CoreNodeSpecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt">CreateAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo">ErrorInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp">ExternalAlternateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp">ExternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee">Fee</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion">HadoopVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp">InternalIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp">MasterNodeIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId">MasterNodeProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId">MasterNodeSpecId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst">PrivateIpFirst</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark">Remark</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId">SecurityGroupsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId">SlaveSecurityGroupsId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt">UpdateAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc">Vnc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput">AddJobsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput">AvailableZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput">BillingTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput">BootstrapScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput">ClusterAdminSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput">ComponentListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput">CoreDataVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput">CoreDataVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput">CoreDataVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput">CoreNodeNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput">CoreNodeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput">LogCollectionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput">MasterDataVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput">MasterDataVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput">MasterDataVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput">MasterNodeNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput">MasterNodeSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput">NodePublicCertNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput">SafeModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId">AvailableZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType">BillingType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret">ClusterAdminSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType">ClusterType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount">CoreDataVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize">CoreDataVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType">CoreDataVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum">CoreNodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize">CoreNodeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection">LogCollection</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount">MasterDataVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize">MasterDataVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType">MasterDataVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum">MasterNodeNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize">MasterNodeSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName">NodePublicCertName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode">SafeMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddJobs`<sup>Required</sup> <a name="AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs"></a>

```go
func AddJobs() MrsClusterV1AddJobsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a>

---

##### `AvailableZoneName`<sup>Required</sup> <a name="AvailableZoneName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName"></a>

```go
func AvailableZoneName() *string
```

- *Type:* *string

---

##### `BootstrapScripts`<sup>Required</sup> <a name="BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts"></a>

```go
func BootstrapScripts() MrsClusterV1BootstrapScriptsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a>

---

##### `ChargingStartTime`<sup>Required</sup> <a name="ChargingStartTime" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime"></a>

```go
func ChargingStartTime() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterState`<sup>Required</sup> <a name="ClusterState" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState"></a>

```go
func ClusterState() *string
```

- *Type:* *string

---

##### `ComponentList`<sup>Required</sup> <a name="ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList"></a>

```go
func ComponentList() MrsClusterV1ComponentListList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList">MrsClusterV1ComponentListList</a>

---

##### `CoreNodeProductId`<sup>Required</sup> <a name="CoreNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId"></a>

```go
func CoreNodeProductId() *string
```

- *Type:* *string

---

##### `CoreNodeSpecId`<sup>Required</sup> <a name="CoreNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId"></a>

```go
func CoreNodeSpecId() *string
```

- *Type:* *string

---

##### `CreateAt`<sup>Required</sup> <a name="CreateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt"></a>

```go
func CreateAt() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo"></a>

```go
func ErrorInfo() *string
```

- *Type:* *string

---

##### `ExternalAlternateIp`<sup>Required</sup> <a name="ExternalAlternateIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp"></a>

```go
func ExternalAlternateIp() *string
```

- *Type:* *string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp"></a>

```go
func ExternalIp() *string
```

- *Type:* *string

---

##### `Fee`<sup>Required</sup> <a name="Fee" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee"></a>

```go
func Fee() *string
```

- *Type:* *string

---

##### `HadoopVersion`<sup>Required</sup> <a name="HadoopVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion"></a>

```go
func HadoopVersion() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp"></a>

```go
func InternalIp() *string
```

- *Type:* *string

---

##### `MasterNodeIp`<sup>Required</sup> <a name="MasterNodeIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp"></a>

```go
func MasterNodeIp() *string
```

- *Type:* *string

---

##### `MasterNodeProductId`<sup>Required</sup> <a name="MasterNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId"></a>

```go
func MasterNodeProductId() *string
```

- *Type:* *string

---

##### `MasterNodeSpecId`<sup>Required</sup> <a name="MasterNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId"></a>

```go
func MasterNodeSpecId() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `PrivateIpFirst`<sup>Required</sup> <a name="PrivateIpFirst" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst"></a>

```go
func PrivateIpFirst() *string
```

- *Type:* *string

---

##### `Remark`<sup>Required</sup> <a name="Remark" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark"></a>

```go
func Remark() *string
```

- *Type:* *string

---

##### `SecurityGroupsId`<sup>Required</sup> <a name="SecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId"></a>

```go
func SecurityGroupsId() *string
```

- *Type:* *string

---

##### `SlaveSecurityGroupsId`<sup>Required</sup> <a name="SlaveSecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId"></a>

```go
func SlaveSecurityGroupsId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts"></a>

```go
func Timeouts() MrsClusterV1TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a>

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt"></a>

```go
func UpdateAt() *string
```

- *Type:* *string

---

##### `Vnc`<sup>Required</sup> <a name="Vnc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc"></a>

```go
func Vnc() *string
```

- *Type:* *string

---

##### `AddJobsInput`<sup>Optional</sup> <a name="AddJobsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput"></a>

```go
func AddJobsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailableZoneIdInput`<sup>Optional</sup> <a name="AvailableZoneIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput"></a>

```go
func AvailableZoneIdInput() *string
```

- *Type:* *string

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput"></a>

```go
func BillingTypeInput() *f64
```

- *Type:* *f64

---

##### `BootstrapScriptsInput`<sup>Optional</sup> <a name="BootstrapScriptsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput"></a>

```go
func BootstrapScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterAdminSecretInput`<sup>Optional</sup> <a name="ClusterAdminSecretInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput"></a>

```go
func ClusterAdminSecretInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *f64
```

- *Type:* *f64

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput"></a>

```go
func ClusterVersionInput() *string
```

- *Type:* *string

---

##### `ComponentListInput`<sup>Optional</sup> <a name="ComponentListInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput"></a>

```go
func ComponentListInput() interface{}
```

- *Type:* interface{}

---

##### `CoreDataVolumeCountInput`<sup>Optional</sup> <a name="CoreDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput"></a>

```go
func CoreDataVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `CoreDataVolumeSizeInput`<sup>Optional</sup> <a name="CoreDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput"></a>

```go
func CoreDataVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `CoreDataVolumeTypeInput`<sup>Optional</sup> <a name="CoreDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput"></a>

```go
func CoreDataVolumeTypeInput() *string
```

- *Type:* *string

---

##### `CoreNodeNumInput`<sup>Optional</sup> <a name="CoreNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput"></a>

```go
func CoreNodeNumInput() *f64
```

- *Type:* *f64

---

##### `CoreNodeSizeInput`<sup>Optional</sup> <a name="CoreNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput"></a>

```go
func CoreNodeSizeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogCollectionInput`<sup>Optional</sup> <a name="LogCollectionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput"></a>

```go
func LogCollectionInput() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeCountInput`<sup>Optional</sup> <a name="MasterDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput"></a>

```go
func MasterDataVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeSizeInput`<sup>Optional</sup> <a name="MasterDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput"></a>

```go
func MasterDataVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeTypeInput`<sup>Optional</sup> <a name="MasterDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput"></a>

```go
func MasterDataVolumeTypeInput() *string
```

- *Type:* *string

---

##### `MasterNodeNumInput`<sup>Optional</sup> <a name="MasterNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput"></a>

```go
func MasterNodeNumInput() *f64
```

- *Type:* *f64

---

##### `MasterNodeSizeInput`<sup>Optional</sup> <a name="MasterNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput"></a>

```go
func MasterNodeSizeInput() *string
```

- *Type:* *string

---

##### `NodePublicCertNameInput`<sup>Optional</sup> <a name="NodePublicCertNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput"></a>

```go
func NodePublicCertNameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SafeModeInput`<sup>Optional</sup> <a name="SafeModeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput"></a>

```go
func SafeModeInput() *f64
```

- *Type:* *f64

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput"></a>

```go
func VolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput"></a>

```go
func VolumeTypeInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AvailableZoneId`<sup>Required</sup> <a name="AvailableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId"></a>

```go
func AvailableZoneId() *string
```

- *Type:* *string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType"></a>

```go
func BillingType() *f64
```

- *Type:* *f64

---

##### `ClusterAdminSecret`<sup>Required</sup> <a name="ClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret"></a>

```go
func ClusterAdminSecret() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType"></a>

```go
func ClusterType() *f64
```

- *Type:* *f64

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `CoreDataVolumeCount`<sup>Required</sup> <a name="CoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount"></a>

```go
func CoreDataVolumeCount() *f64
```

- *Type:* *f64

---

##### `CoreDataVolumeSize`<sup>Required</sup> <a name="CoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize"></a>

```go
func CoreDataVolumeSize() *f64
```

- *Type:* *f64

---

##### `CoreDataVolumeType`<sup>Required</sup> <a name="CoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType"></a>

```go
func CoreDataVolumeType() *string
```

- *Type:* *string

---

##### `CoreNodeNum`<sup>Required</sup> <a name="CoreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum"></a>

```go
func CoreNodeNum() *f64
```

- *Type:* *f64

---

##### `CoreNodeSize`<sup>Required</sup> <a name="CoreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize"></a>

```go
func CoreNodeSize() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogCollection`<sup>Required</sup> <a name="LogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection"></a>

```go
func LogCollection() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeCount`<sup>Required</sup> <a name="MasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount"></a>

```go
func MasterDataVolumeCount() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeSize`<sup>Required</sup> <a name="MasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize"></a>

```go
func MasterDataVolumeSize() *f64
```

- *Type:* *f64

---

##### `MasterDataVolumeType`<sup>Required</sup> <a name="MasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType"></a>

```go
func MasterDataVolumeType() *string
```

- *Type:* *string

---

##### `MasterNodeNum`<sup>Required</sup> <a name="MasterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum"></a>

```go
func MasterNodeNum() *f64
```

- *Type:* *f64

---

##### `MasterNodeSize`<sup>Required</sup> <a name="MasterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize"></a>

```go
func MasterNodeSize() *string
```

- *Type:* *string

---

##### `NodePublicCertName`<sup>Required</sup> <a name="NodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName"></a>

```go
func NodePublicCertName() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SafeMode`<sup>Required</sup> <a name="SafeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode"></a>

```go
func SafeMode() *f64
```

- *Type:* *f64

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MrsClusterV1AddJobs <a name="MrsClusterV1AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

&mrsclusterv1.MrsClusterV1AddJobs {
	JarPath: *string,
	JobName: *string,
	JobType: *f64,
	SubmitJobOnceClusterRun: interface{},
	Arguments: *string,
	FileAction: *string,
	HiveScriptPath: *string,
	Hql: *string,
	Input: *string,
	JobLog: *string,
	Output: *string,
	ShutdownCluster: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath">JarPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName">JobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_name MrsClusterV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType">JobType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_type MrsClusterV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun">SubmitJobOnceClusterRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments">Arguments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#arguments MrsClusterV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction">FileAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#file_action MrsClusterV1#file_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath">HiveScriptPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql">Hql</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hql MrsClusterV1#hql}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#input MrsClusterV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog">JobLog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_log MrsClusterV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output">Output</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#output MrsClusterV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster">ShutdownCluster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}. |

---

##### `JarPath`<sup>Required</sup> <a name="JarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath"></a>

```go
JarPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}.

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_name MrsClusterV1#job_name}.

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType"></a>

```go
JobType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_type MrsClusterV1#job_type}.

---

##### `SubmitJobOnceClusterRun`<sup>Required</sup> <a name="SubmitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun"></a>

```go
SubmitJobOnceClusterRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments"></a>

```go
Arguments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#arguments MrsClusterV1#arguments}.

---

##### `FileAction`<sup>Optional</sup> <a name="FileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction"></a>

```go
FileAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#file_action MrsClusterV1#file_action}.

---

##### `HiveScriptPath`<sup>Optional</sup> <a name="HiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath"></a>

```go
HiveScriptPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}.

---

##### `Hql`<sup>Optional</sup> <a name="Hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql"></a>

```go
Hql *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hql MrsClusterV1#hql}.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#input MrsClusterV1#input}.

---

##### `JobLog`<sup>Optional</sup> <a name="JobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog"></a>

```go
JobLog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_log MrsClusterV1#job_log}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output"></a>

```go
Output *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#output MrsClusterV1#output}.

---

##### `ShutdownCluster`<sup>Optional</sup> <a name="ShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster"></a>

```go
ShutdownCluster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}.

---

### MrsClusterV1BootstrapScripts <a name="MrsClusterV1BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

&mrsclusterv1.MrsClusterV1BootstrapScripts {
	FailAction: *string,
	Name: *string,
	Nodes: *[]*string,
	Uri: *string,
	ActiveMaster: interface{},
	BeforeComponentStart: interface{},
	Parameters: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction">FailAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#name MrsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes">Nodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#nodes MrsClusterV1#nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#uri MrsClusterV1#uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster">ActiveMaster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#active_master MrsClusterV1#active_master}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart">BeforeComponentStart</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters">Parameters</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#parameters MrsClusterV1#parameters}. |

---

##### `FailAction`<sup>Required</sup> <a name="FailAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction"></a>

```go
FailAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#name MrsClusterV1#name}.

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes"></a>

```go
Nodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#nodes MrsClusterV1#nodes}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#uri MrsClusterV1#uri}.

---

##### `ActiveMaster`<sup>Optional</sup> <a name="ActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster"></a>

```go
ActiveMaster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#active_master MrsClusterV1#active_master}.

---

##### `BeforeComponentStart`<sup>Optional</sup> <a name="BeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart"></a>

```go
BeforeComponentStart interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters"></a>

```go
Parameters *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#parameters MrsClusterV1#parameters}.

---

### MrsClusterV1ComponentList <a name="MrsClusterV1ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

&mrsclusterv1.MrsClusterV1ComponentList {
	ComponentName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.property.componentName">ComponentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#component_name MrsClusterV1#component_name}. |

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.property.componentName"></a>

```go
ComponentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#component_name MrsClusterV1#component_name}.

---

### MrsClusterV1Config <a name="MrsClusterV1Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

&mrsclusterv1.MrsClusterV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailableZoneId: *string,
	BillingType: *f64,
	ClusterName: *string,
	ClusterVersion: *string,
	ComponentList: interface{},
	CoreNodeNum: *f64,
	CoreNodeSize: *string,
	MasterNodeNum: *f64,
	MasterNodeSize: *string,
	NodePublicCertName: *string,
	SafeMode: *f64,
	SubnetId: *string,
	VpcId: *string,
	AddJobs: interface{},
	BootstrapScripts: interface{},
	ClusterAdminSecret: *string,
	ClusterType: *f64,
	CoreDataVolumeCount: *f64,
	CoreDataVolumeSize: *f64,
	CoreDataVolumeType: *string,
	Id: *string,
	LogCollection: *f64,
	MasterDataVolumeCount: *f64,
	MasterDataVolumeSize: *f64,
	MasterDataVolumeType: *string,
	Region: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts,
	VolumeSize: *f64,
	VolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId">AvailableZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType">BillingType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList">ComponentList</a></code> | <code>interface{}</code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum">CoreNodeNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize">CoreNodeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum">MasterNodeNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize">MasterNodeSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName">NodePublicCertName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode">SafeMode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs">AddJobs</a></code> | <code>interface{}</code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts">BootstrapScripts</a></code> | <code>interface{}</code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret">ClusterAdminSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType">ClusterType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount">CoreDataVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize">CoreDataVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType">CoreDataVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection">LogCollection</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount">MasterDataVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize">MasterDataVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType">MasterDataVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType">VolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableZoneId`<sup>Required</sup> <a name="AvailableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId"></a>

```go
AvailableZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType"></a>

```go
BillingType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion"></a>

```go
ClusterVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `ComponentList`<sup>Required</sup> <a name="ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList"></a>

```go
ComponentList interface{}
```

- *Type:* interface{}

component_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `CoreNodeNum`<sup>Required</sup> <a name="CoreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum"></a>

```go
CoreNodeNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `CoreNodeSize`<sup>Required</sup> <a name="CoreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize"></a>

```go
CoreNodeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `MasterNodeNum`<sup>Required</sup> <a name="MasterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum"></a>

```go
MasterNodeNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `MasterNodeSize`<sup>Required</sup> <a name="MasterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize"></a>

```go
MasterNodeSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `NodePublicCertName`<sup>Required</sup> <a name="NodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName"></a>

```go
NodePublicCertName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `SafeMode`<sup>Required</sup> <a name="SafeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode"></a>

```go
SafeMode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `AddJobs`<sup>Optional</sup> <a name="AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs"></a>

```go
AddJobs interface{}
```

- *Type:* interface{}

add_jobs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `BootstrapScripts`<sup>Optional</sup> <a name="BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts"></a>

```go
BootstrapScripts interface{}
```

- *Type:* interface{}

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `ClusterAdminSecret`<sup>Optional</sup> <a name="ClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret"></a>

```go
ClusterAdminSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType"></a>

```go
ClusterType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `CoreDataVolumeCount`<sup>Optional</sup> <a name="CoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount"></a>

```go
CoreDataVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `CoreDataVolumeSize`<sup>Optional</sup> <a name="CoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize"></a>

```go
CoreDataVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `CoreDataVolumeType`<sup>Optional</sup> <a name="CoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType"></a>

```go
CoreDataVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogCollection`<sup>Optional</sup> <a name="LogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection"></a>

```go
LogCollection *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `MasterDataVolumeCount`<sup>Optional</sup> <a name="MasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount"></a>

```go
MasterDataVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `MasterDataVolumeSize`<sup>Optional</sup> <a name="MasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize"></a>

```go
MasterDataVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `MasterDataVolumeType`<sup>Optional</sup> <a name="MasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType"></a>

```go
MasterDataVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts"></a>

```go
Timeouts MrsClusterV1Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize"></a>

```go
VolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType"></a>

```go
VolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

### MrsClusterV1Timeouts <a name="MrsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

&mrsclusterv1.MrsClusterV1Timeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#create MrsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#delete MrsClusterV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#create MrsClusterV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsClusterV1AddJobsList <a name="MrsClusterV1AddJobsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1AddJobsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MrsClusterV1AddJobsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get"></a>

```go
func Get(index *f64) MrsClusterV1AddJobsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1AddJobsOutputReference <a name="MrsClusterV1AddJobsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1AddJobsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MrsClusterV1AddJobsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction">ResetFileAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath">ResetHiveScriptPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql">ResetHql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog">ResetJobLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster">ResetShutdownCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetFileAction` <a name="ResetFileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction"></a>

```go
func ResetFileAction()
```

##### `ResetHiveScriptPath` <a name="ResetHiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath"></a>

```go
func ResetHiveScriptPath()
```

##### `ResetHql` <a name="ResetHql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql"></a>

```go
func ResetHql()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetJobLog` <a name="ResetJobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog"></a>

```go
func ResetJobLog()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput"></a>

```go
func ResetOutput()
```

##### `ResetShutdownCluster` <a name="ResetShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster"></a>

```go
func ResetShutdownCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput">FileActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput">HiveScriptPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput">HqlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput">JarPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput">JobLogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput">JobTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput">OutputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput">ShutdownClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput">SubmitJobOnceClusterRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments">Arguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction">FileAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath">HiveScriptPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql">Hql</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath">JarPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog">JobLog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType">JobType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output">Output</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster">ShutdownCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun">SubmitJobOnceClusterRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() *string
```

- *Type:* *string

---

##### `FileActionInput`<sup>Optional</sup> <a name="FileActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput"></a>

```go
func FileActionInput() *string
```

- *Type:* *string

---

##### `HiveScriptPathInput`<sup>Optional</sup> <a name="HiveScriptPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput"></a>

```go
func HiveScriptPathInput() *string
```

- *Type:* *string

---

##### `HqlInput`<sup>Optional</sup> <a name="HqlInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput"></a>

```go
func HqlInput() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `JarPathInput`<sup>Optional</sup> <a name="JarPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput"></a>

```go
func JarPathInput() *string
```

- *Type:* *string

---

##### `JobLogInput`<sup>Optional</sup> <a name="JobLogInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput"></a>

```go
func JobLogInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput"></a>

```go
func JobTypeInput() *f64
```

- *Type:* *f64

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput"></a>

```go
func OutputInput() *string
```

- *Type:* *string

---

##### `ShutdownClusterInput`<sup>Optional</sup> <a name="ShutdownClusterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput"></a>

```go
func ShutdownClusterInput() interface{}
```

- *Type:* interface{}

---

##### `SubmitJobOnceClusterRunInput`<sup>Optional</sup> <a name="SubmitJobOnceClusterRunInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput"></a>

```go
func SubmitJobOnceClusterRunInput() interface{}
```

- *Type:* interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments"></a>

```go
func Arguments() *string
```

- *Type:* *string

---

##### `FileAction`<sup>Required</sup> <a name="FileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction"></a>

```go
func FileAction() *string
```

- *Type:* *string

---

##### `HiveScriptPath`<sup>Required</sup> <a name="HiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath"></a>

```go
func HiveScriptPath() *string
```

- *Type:* *string

---

##### `Hql`<sup>Required</sup> <a name="Hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql"></a>

```go
func Hql() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `JarPath`<sup>Required</sup> <a name="JarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath"></a>

```go
func JarPath() *string
```

- *Type:* *string

---

##### `JobLog`<sup>Required</sup> <a name="JobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog"></a>

```go
func JobLog() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType"></a>

```go
func JobType() *f64
```

- *Type:* *f64

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output"></a>

```go
func Output() *string
```

- *Type:* *string

---

##### `ShutdownCluster`<sup>Required</sup> <a name="ShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster"></a>

```go
func ShutdownCluster() interface{}
```

- *Type:* interface{}

---

##### `SubmitJobOnceClusterRun`<sup>Required</sup> <a name="SubmitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun"></a>

```go
func SubmitJobOnceClusterRun() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1BootstrapScriptsList <a name="MrsClusterV1BootstrapScriptsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1BootstrapScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MrsClusterV1BootstrapScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get"></a>

```go
func Get(index *f64) MrsClusterV1BootstrapScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1BootstrapScriptsOutputReference <a name="MrsClusterV1BootstrapScriptsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1BootstrapScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MrsClusterV1BootstrapScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster">ResetActiveMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart">ResetBeforeComponentStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveMaster` <a name="ResetActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster"></a>

```go
func ResetActiveMaster()
```

##### `ResetBeforeComponentStart` <a name="ResetBeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart"></a>

```go
func ResetBeforeComponentStart()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput">ActiveMasterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput">BeforeComponentStartInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput">FailActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput">NodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster">ActiveMaster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart">BeforeComponentStart</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction">FailAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes">Nodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters">Parameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveMasterInput`<sup>Optional</sup> <a name="ActiveMasterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput"></a>

```go
func ActiveMasterInput() interface{}
```

- *Type:* interface{}

---

##### `BeforeComponentStartInput`<sup>Optional</sup> <a name="BeforeComponentStartInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput"></a>

```go
func BeforeComponentStartInput() interface{}
```

- *Type:* interface{}

---

##### `FailActionInput`<sup>Optional</sup> <a name="FailActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput"></a>

```go
func FailActionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodesInput`<sup>Optional</sup> <a name="NodesInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput"></a>

```go
func NodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `ActiveMaster`<sup>Required</sup> <a name="ActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster"></a>

```go
func ActiveMaster() interface{}
```

- *Type:* interface{}

---

##### `BeforeComponentStart`<sup>Required</sup> <a name="BeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart"></a>

```go
func BeforeComponentStart() interface{}
```

- *Type:* interface{}

---

##### `FailAction`<sup>Required</sup> <a name="FailAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction"></a>

```go
func FailAction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes"></a>

```go
func Nodes() *[]*string
```

- *Type:* *[]*string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters"></a>

```go
func Parameters() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1ComponentListList <a name="MrsClusterV1ComponentListList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1ComponentListList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MrsClusterV1ComponentListList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get"></a>

```go
func Get(index *f64) MrsClusterV1ComponentListOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1ComponentListOutputReference <a name="MrsClusterV1ComponentListOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1ComponentListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MrsClusterV1ComponentListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentDesc">ComponentDesc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentId">ComponentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentNameInput">ComponentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentName">ComponentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentDesc`<sup>Required</sup> <a name="ComponentDesc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentDesc"></a>

```go
func ComponentDesc() *string
```

- *Type:* *string

---

##### `ComponentId`<sup>Required</sup> <a name="ComponentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentId"></a>

```go
func ComponentId() *string
```

- *Type:* *string

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentVersion"></a>

```go
func ComponentVersion() *string
```

- *Type:* *string

---

##### `ComponentNameInput`<sup>Optional</sup> <a name="ComponentNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentNameInput"></a>

```go
func ComponentNameInput() *string
```

- *Type:* *string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentName"></a>

```go
func ComponentName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MrsClusterV1TimeoutsOutputReference <a name="MrsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/mrsclusterv1"

mrsclusterv1.NewMrsClusterV1TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MrsClusterV1TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



