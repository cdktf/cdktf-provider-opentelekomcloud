# `dataOpentelekomcloudSfsFileSystemV2` Submodule <a name="`dataOpentelekomcloudSfsFileSystemV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudSfsFileSystemV2 <a name="DataOpentelekomcloudSfsFileSystemV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2 opentelekomcloud_sfs_file_system_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudsfsfilesystemv2"

dataopentelekomcloudsfsfilesystemv2.NewDataOpentelekomcloudSfsFileSystemV2(scope Construct, id *string, config DataOpentelekomcloudSfsFileSystemV2Config) DataOpentelekomcloudSfsFileSystemV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config">DataOpentelekomcloudSfsFileSystemV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config">DataOpentelekomcloudSfsFileSystemV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetName"></a>

```go
func ResetName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudsfsfilesystemv2"

dataopentelekomcloudsfsfilesystemv2.DataOpentelekomcloudSfsFileSystemV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudsfsfilesystemv2"

dataopentelekomcloudsfsfilesystemv2.DataOpentelekomcloudSfsFileSystemV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudsfsfilesystemv2"

dataopentelekomcloudsfsfilesystemv2.DataOpentelekomcloudSfsFileSystemV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessTo">AccessTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocation">ExportLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocations">ExportLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.isPublic">IsPublic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.mountId">MountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.preferred">Preferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareAccessId">ShareAccessId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareInstanceId">ShareInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareProto">ShareProto</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareType">ShareType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `AccessTo`<sup>Required</sup> <a name="AccessTo" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessTo"></a>

```go
func AccessTo() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExportLocation`<sup>Required</sup> <a name="ExportLocation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocation"></a>

```go
func ExportLocation() *string
```

- *Type:* *string

---

##### `ExportLocations`<sup>Required</sup> <a name="ExportLocations" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.exportLocations"></a>

```go
func ExportLocations() *[]*string
```

- *Type:* *[]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.isPublic"></a>

```go
func IsPublic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.mountId"></a>

```go
func MountId() *string
```

- *Type:* *string

---

##### `Preferred`<sup>Required</sup> <a name="Preferred" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.preferred"></a>

```go
func Preferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ShareAccessId`<sup>Required</sup> <a name="ShareAccessId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareAccessId"></a>

```go
func ShareAccessId() *string
```

- *Type:* *string

---

##### `ShareInstanceId`<sup>Required</sup> <a name="ShareInstanceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareInstanceId"></a>

```go
func ShareInstanceId() *string
```

- *Type:* *string

---

##### `ShareProto`<sup>Required</sup> <a name="ShareProto" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareProto"></a>

```go
func ShareProto() *string
```

- *Type:* *string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.shareType"></a>

```go
func ShareType() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudSfsFileSystemV2Config <a name="DataOpentelekomcloudSfsFileSystemV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudsfsfilesystemv2"

&dataopentelekomcloudsfsfilesystemv2.DataOpentelekomcloudSfsFileSystemV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Name: *string,
	Region: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#id DataOpentelekomcloudSfsFileSystemV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#name DataOpentelekomcloudSfsFileSystemV2#name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#region DataOpentelekomcloudSfsFileSystemV2#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudSfsFileSystemV2.DataOpentelekomcloudSfsFileSystemV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/sfs_file_system_v2#status DataOpentelekomcloudSfsFileSystemV2#status}.

---



