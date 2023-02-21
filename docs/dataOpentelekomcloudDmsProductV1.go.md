# `dataOpentelekomcloudDmsProductV1` Submodule <a name="`dataOpentelekomcloudDmsProductV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDmsProductV1 <a name="DataOpentelekomcloudDmsProductV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1 opentelekomcloud_dms_product_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsproductv1"

dataopentelekomclouddmsproductv1.NewDataOpentelekomcloudDmsProductV1(scope Construct, id *string, config DataOpentelekomcloudDmsProductV1Config) DataOpentelekomcloudDmsProductV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config">DataOpentelekomcloudDmsProductV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config">DataOpentelekomcloudDmsProductV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetIoType">ResetIoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetNodeNum">ResetNodeNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetPartitionNum">ResetPartitionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorageSpecCode">ResetStorageSpecCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVmSpecification">ResetVmSpecification</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetId"></a>

```go
func ResetId()
```

##### `ResetIoType` <a name="ResetIoType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetIoType"></a>

```go
func ResetIoType()
```

##### `ResetNodeNum` <a name="ResetNodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetNodeNum"></a>

```go
func ResetNodeNum()
```

##### `ResetPartitionNum` <a name="ResetPartitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetPartitionNum"></a>

```go
func ResetPartitionNum()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetStorageSpecCode` <a name="ResetStorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetStorageSpecCode"></a>

```go
func ResetStorageSpecCode()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVersion"></a>

```go
func ResetVersion()
```

##### `ResetVmSpecification` <a name="ResetVmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.resetVmSpecification"></a>

```go
func ResetVmSpecification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsproductv1"

dataopentelekomclouddmsproductv1.DataOpentelekomcloudDmsProductV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsproductv1"

dataopentelekomclouddmsproductv1.DataOpentelekomcloudDmsProductV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsproductv1"

dataopentelekomclouddmsproductv1.DataOpentelekomcloudDmsProductV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidthInput">BandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioTypeInput">IoTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNumInput">NodeNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNumInput">PartitionNumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageInput">StorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecificationInput">VmSpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioType">IoType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNum">NodeNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNum">PartitionNum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storage">Storage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecification">VmSpecification</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidthInput"></a>

```go
func BandwidthInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `IoTypeInput`<sup>Optional</sup> <a name="IoTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioTypeInput"></a>

```go
func IoTypeInput() *string
```

- *Type:* *string

---

##### `NodeNumInput`<sup>Optional</sup> <a name="NodeNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNumInput"></a>

```go
func NodeNumInput() *string
```

- *Type:* *string

---

##### `PartitionNumInput`<sup>Optional</sup> <a name="PartitionNumInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNumInput"></a>

```go
func PartitionNumInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageInput"></a>

```go
func StorageInput() *string
```

- *Type:* *string

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCodeInput"></a>

```go
func StorageSpecCodeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `VmSpecificationInput`<sup>Optional</sup> <a name="VmSpecificationInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecificationInput"></a>

```go
func VmSpecificationInput() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `IoType`<sup>Required</sup> <a name="IoType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.ioType"></a>

```go
func IoType() *string
```

- *Type:* *string

---

##### `NodeNum`<sup>Required</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.nodeNum"></a>

```go
func NodeNum() *string
```

- *Type:* *string

---

##### `PartitionNum`<sup>Required</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.partitionNum"></a>

```go
func PartitionNum() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storage"></a>

```go
func Storage() *string
```

- *Type:* *string

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VmSpecification`<sup>Required</sup> <a name="VmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.vmSpecification"></a>

```go
func VmSpecification() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDmsProductV1Config <a name="DataOpentelekomcloudDmsProductV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomclouddmsproductv1"

&dataopentelekomclouddmsproductv1.DataOpentelekomcloudDmsProductV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	InstanceType: *string,
	Bandwidth: *string,
	Id: *string,
	IoType: *string,
	NodeNum: *string,
	PartitionNum: *string,
	Storage: *string,
	StorageSpecCode: *string,
	Version: *string,
	VmSpecification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#engine DataOpentelekomcloudDmsProductV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.instanceType">InstanceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#instance_type DataOpentelekomcloudDmsProductV1#instance_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#bandwidth DataOpentelekomcloudDmsProductV1#bandwidth}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#id DataOpentelekomcloudDmsProductV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.ioType">IoType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#io_type DataOpentelekomcloudDmsProductV1#io_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.nodeNum">NodeNum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#node_num DataOpentelekomcloudDmsProductV1#node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.partitionNum">PartitionNum</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#partition_num DataOpentelekomcloudDmsProductV1#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storage">Storage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#storage DataOpentelekomcloudDmsProductV1#storage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#storage_spec_code DataOpentelekomcloudDmsProductV1#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#version DataOpentelekomcloudDmsProductV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.vmSpecification">VmSpecification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#vm_specification DataOpentelekomcloudDmsProductV1#vm_specification}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#engine DataOpentelekomcloudDmsProductV1#engine}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#instance_type DataOpentelekomcloudDmsProductV1#instance_type}.

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.bandwidth"></a>

```go
Bandwidth *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#bandwidth DataOpentelekomcloudDmsProductV1#bandwidth}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#id DataOpentelekomcloudDmsProductV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IoType`<sup>Optional</sup> <a name="IoType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.ioType"></a>

```go
IoType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#io_type DataOpentelekomcloudDmsProductV1#io_type}.

---

##### `NodeNum`<sup>Optional</sup> <a name="NodeNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.nodeNum"></a>

```go
NodeNum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#node_num DataOpentelekomcloudDmsProductV1#node_num}.

---

##### `PartitionNum`<sup>Optional</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.partitionNum"></a>

```go
PartitionNum *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#partition_num DataOpentelekomcloudDmsProductV1#partition_num}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storage"></a>

```go
Storage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#storage DataOpentelekomcloudDmsProductV1#storage}.

---

##### `StorageSpecCode`<sup>Optional</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.storageSpecCode"></a>

```go
StorageSpecCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#storage_spec_code DataOpentelekomcloudDmsProductV1#storage_spec_code}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#version DataOpentelekomcloudDmsProductV1#version}.

---

##### `VmSpecification`<sup>Optional</sup> <a name="VmSpecification" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDmsProductV1.DataOpentelekomcloudDmsProductV1Config.property.vmSpecification"></a>

```go
VmSpecification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dms_product_v1#vm_specification DataOpentelekomcloudDmsProductV1#vm_specification}.

---



