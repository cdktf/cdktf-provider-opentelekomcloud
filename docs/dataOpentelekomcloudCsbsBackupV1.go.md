# `dataOpentelekomcloudCsbsBackupV1` Submodule <a name="`dataOpentelekomcloudCsbsBackupV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCsbsBackupV1 <a name="DataOpentelekomcloudCsbsBackupV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1 opentelekomcloud_csbs_backup_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1(scope Construct, id *string, config DataOpentelekomcloudCsbsBackupV1Config) DataOpentelekomcloudCsbsBackupV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config">DataOpentelekomcloudCsbsBackupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config">DataOpentelekomcloudCsbsBackupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupName">ResetBackupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupRecordId">ResetBackupRecordId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetVmIp">ResetVmIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackupName` <a name="ResetBackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupName"></a>

```go
func ResetBackupName()
```

##### `ResetBackupRecordId` <a name="ResetBackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetBackupRecordId"></a>

```go
func ResetBackupRecordId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVmIp` <a name="ResetVmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.resetVmIp"></a>

```go
func ResetVmIp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.autoTrigger">AutoTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.averageSpeed">AverageSpeed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList">DataOpentelekomcloudCsbsBackupV1TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmMetadata">VmMetadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList">DataOpentelekomcloudCsbsBackupV1VmMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.volumeBackups">VolumeBackups</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList">DataOpentelekomcloudCsbsBackupV1VolumeBackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupNameInput">BackupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordIdInput">BackupRecordIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIpInput">VmIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupName">BackupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordId">BackupRecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIp">VmIp</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoTrigger`<sup>Required</sup> <a name="AutoTrigger" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.autoTrigger"></a>

```go
func AutoTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AverageSpeed`<sup>Required</sup> <a name="AverageSpeed" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.averageSpeed"></a>

```go
func AverageSpeed() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tags"></a>

```go
func Tags() DataOpentelekomcloudCsbsBackupV1TagsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList">DataOpentelekomcloudCsbsBackupV1TagsList</a>

---

##### `VmMetadata`<sup>Required</sup> <a name="VmMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmMetadata"></a>

```go
func VmMetadata() DataOpentelekomcloudCsbsBackupV1VmMetadataList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList">DataOpentelekomcloudCsbsBackupV1VmMetadataList</a>

---

##### `VolumeBackups`<sup>Required</sup> <a name="VolumeBackups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.volumeBackups"></a>

```go
func VolumeBackups() DataOpentelekomcloudCsbsBackupV1VolumeBackupsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList">DataOpentelekomcloudCsbsBackupV1VolumeBackupsList</a>

---

##### `BackupNameInput`<sup>Optional</sup> <a name="BackupNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupNameInput"></a>

```go
func BackupNameInput() *string
```

- *Type:* *string

---

##### `BackupRecordIdInput`<sup>Optional</sup> <a name="BackupRecordIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordIdInput"></a>

```go
func BackupRecordIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VmIpInput`<sup>Optional</sup> <a name="VmIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIpInput"></a>

```go
func VmIpInput() *string
```

- *Type:* *string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupName"></a>

```go
func BackupName() *string
```

- *Type:* *string

---

##### `BackupRecordId`<sup>Required</sup> <a name="BackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.backupRecordId"></a>

```go
func BackupRecordId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `VmIp`<sup>Required</sup> <a name="VmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.vmIp"></a>

```go
func VmIp() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCsbsBackupV1Config <a name="DataOpentelekomcloudCsbsBackupV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

&dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupName: *string,
	BackupRecordId: *string,
	Id: *string,
	PolicyId: *string,
	Region: *string,
	ResourceId: *string,
	ResourceName: *string,
	ResourceType: *string,
	Status: *string,
	Tags: interface{},
	VmIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupName">BackupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_name DataOpentelekomcloudCsbsBackupV1#backup_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupRecordId">BackupRecordId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_record_id DataOpentelekomcloudCsbsBackupV1#backup_record_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#id DataOpentelekomcloudCsbsBackupV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#policy_id DataOpentelekomcloudCsbsBackupV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#region DataOpentelekomcloudCsbsBackupV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_id DataOpentelekomcloudCsbsBackupV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_name DataOpentelekomcloudCsbsBackupV1#resource_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_type DataOpentelekomcloudCsbsBackupV1#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#status DataOpentelekomcloudCsbsBackupV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.vmIp">VmIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#vm_ip DataOpentelekomcloudCsbsBackupV1#vm_ip}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupName`<sup>Optional</sup> <a name="BackupName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupName"></a>

```go
BackupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_name DataOpentelekomcloudCsbsBackupV1#backup_name}.

---

##### `BackupRecordId`<sup>Optional</sup> <a name="BackupRecordId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.backupRecordId"></a>

```go
BackupRecordId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#backup_record_id DataOpentelekomcloudCsbsBackupV1#backup_record_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#id DataOpentelekomcloudCsbsBackupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#policy_id DataOpentelekomcloudCsbsBackupV1#policy_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#region DataOpentelekomcloudCsbsBackupV1#region}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_id DataOpentelekomcloudCsbsBackupV1#resource_id}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_name DataOpentelekomcloudCsbsBackupV1#resource_name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#resource_type DataOpentelekomcloudCsbsBackupV1#resource_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#status DataOpentelekomcloudCsbsBackupV1#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#tags DataOpentelekomcloudCsbsBackupV1#tags}

---

##### `VmIp`<sup>Optional</sup> <a name="VmIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Config.property.vmIp"></a>

```go
VmIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#vm_ip DataOpentelekomcloudCsbsBackupV1#vm_ip}.

---

### DataOpentelekomcloudCsbsBackupV1Tags <a name="DataOpentelekomcloudCsbsBackupV1Tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

&dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1Tags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#key DataOpentelekomcloudCsbsBackupV1#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#value DataOpentelekomcloudCsbsBackupV1#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#key DataOpentelekomcloudCsbsBackupV1#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1Tags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_v1#value DataOpentelekomcloudCsbsBackupV1#value}.

---

### DataOpentelekomcloudCsbsBackupV1VmMetadata <a name="DataOpentelekomcloudCsbsBackupV1VmMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

&dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1VmMetadata {

}
```


### DataOpentelekomcloudCsbsBackupV1VolumeBackups <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

&dataopentelekomcloudcsbsbackupv1.DataOpentelekomcloudCsbsBackupV1VolumeBackups {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCsbsBackupV1TagsList <a name="DataOpentelekomcloudCsbsBackupV1TagsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1TagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCsbsBackupV1TagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCsbsBackupV1TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOpentelekomcloudCsbsBackupV1TagsOutputReference <a name="DataOpentelekomcloudCsbsBackupV1TagsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1TagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCsbsBackupV1TagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1TagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOpentelekomcloudCsbsBackupV1VmMetadataList <a name="DataOpentelekomcloudCsbsBackupV1VmMetadataList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1VmMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCsbsBackupV1VmMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference <a name="DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.cloudServiceType">CloudServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.disk">Disk</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.eip">Eip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.ram">Ram</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata">DataOpentelekomcloudCsbsBackupV1VmMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudServiceType`<sup>Required</sup> <a name="CloudServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.cloudServiceType"></a>

```go
func CloudServiceType() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.disk"></a>

```go
func Disk() *f64
```

- *Type:* *f64

---

##### `Eip`<sup>Required</sup> <a name="Eip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.eip"></a>

```go
func Eip() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.ram"></a>

```go
func Ram() *f64
```

- *Type:* *f64

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCsbsBackupV1VmMetadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VmMetadata">DataOpentelekomcloudCsbsBackupV1VmMetadata</a>

---


### DataOpentelekomcloudCsbsBackupV1VolumeBackupsList <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackupsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1VolumeBackupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCsbsBackupV1VolumeBackupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference <a name="DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudcsbsbackupv1"

dataopentelekomcloudcsbsbackupv1.NewDataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed">AverageSpeed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.bootable">Bootable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.incremental">Incremental</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId">SourceVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName">SourceVolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize">SourceVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio">SpaceSavingRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups">DataOpentelekomcloudCsbsBackupV1VolumeBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AverageSpeed`<sup>Required</sup> <a name="AverageSpeed" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.averageSpeed"></a>

```go
func AverageSpeed() *f64
```

- *Type:* *f64

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.bootable"></a>

```go
func Bootable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `Incremental`<sup>Required</sup> <a name="Incremental" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.incremental"></a>

```go
func Incremental() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SourceVolumeId`<sup>Required</sup> <a name="SourceVolumeId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeId"></a>

```go
func SourceVolumeId() *string
```

- *Type:* *string

---

##### `SourceVolumeName`<sup>Required</sup> <a name="SourceVolumeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeName"></a>

```go
func SourceVolumeName() *string
```

- *Type:* *string

---

##### `SourceVolumeSize`<sup>Required</sup> <a name="SourceVolumeSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.sourceVolumeSize"></a>

```go
func SourceVolumeSize() *f64
```

- *Type:* *f64

---

##### `SpaceSavingRatio`<sup>Required</sup> <a name="SpaceSavingRatio" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.spaceSavingRatio"></a>

```go
func SpaceSavingRatio() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCsbsBackupV1VolumeBackups
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupV1.DataOpentelekomcloudCsbsBackupV1VolumeBackups">DataOpentelekomcloudCsbsBackupV1VolumeBackups</a>

---



