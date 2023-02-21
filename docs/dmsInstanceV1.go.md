# `dmsInstanceV1` Submodule <a name="`dmsInstanceV1` Submodule" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsInstanceV1 <a name="DmsInstanceV1" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1 opentelekomcloud_dms_instance_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev1"

dmsinstancev1.NewDmsInstanceV1(scope Construct, id *string, config DmsInstanceV1Config) DmsInstanceV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config">DmsInstanceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config">DmsInstanceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetAccessUser">ResetAccessUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainBegin">ResetMaintainBegin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainEnd">ResetMaintainEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPartitionNum">ResetPartitionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetSpecification">ResetSpecification</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccessUser` <a name="ResetAccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetAccessUser"></a>

```go
func ResetAccessUser()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetId"></a>

```go
func ResetId()
```

##### `ResetMaintainBegin` <a name="ResetMaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainBegin"></a>

```go
func ResetMaintainBegin()
```

##### `ResetMaintainEnd` <a name="ResetMaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetMaintainEnd"></a>

```go
func ResetMaintainEnd()
```

##### `ResetPartitionNum` <a name="ResetPartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPartitionNum"></a>

```go
func ResetPartitionNum()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSpecification` <a name="ResetSpecification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.resetSpecification"></a>

```go
func ResetSpecification()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev1"

dmsinstancev1.DmsInstanceV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev1"

dmsinstancev1.DmsInstanceV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev1"

dmsinstancev1.DmsInstanceV1_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connectAddress">ConnectAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.orderId">OrderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupName">SecurityGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetName">SubnetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.usedStorageSpace">UsedStorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcName">VpcName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUserInput">AccessUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZonesInput">AvailableZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBeginInput">MaintainBeginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEndInput">MaintainEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNumInput">PartitionNumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupIdInput">SecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specificationInput">SpecificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpaceInput">StorageSpaceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCodeInput">StorageSpecCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUser">AccessUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNum">PartitionNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specification">Specification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectAddress`<sup>Required</sup> <a name="ConnectAddress" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.connectAddress"></a>

```go
func ConnectAddress() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.orderId"></a>

```go
func OrderId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.resourceSpecCode"></a>

```go
func ResourceSpecCode() *string
```

- *Type:* *string

---

##### `SecurityGroupName`<sup>Required</sup> <a name="SecurityGroupName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupName"></a>

```go
func SecurityGroupName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetName`<sup>Required</sup> <a name="SubnetName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetName"></a>

```go
func SubnetName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsedStorageSpace`<sup>Required</sup> <a name="UsedStorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.usedStorageSpace"></a>

```go
func UsedStorageSpace() *f64
```

- *Type:* *f64

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcName"></a>

```go
func VpcName() *string
```

- *Type:* *string

---

##### `AccessUserInput`<sup>Optional</sup> <a name="AccessUserInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUserInput"></a>

```go
func AccessUserInput() *string
```

- *Type:* *string

---

##### `AvailableZonesInput`<sup>Optional</sup> <a name="AvailableZonesInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZonesInput"></a>

```go
func AvailableZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaintainBeginInput`<sup>Optional</sup> <a name="MaintainBeginInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBeginInput"></a>

```go
func MaintainBeginInput() *string
```

- *Type:* *string

---

##### `MaintainEndInput`<sup>Optional</sup> <a name="MaintainEndInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEndInput"></a>

```go
func MaintainEndInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionNumInput`<sup>Optional</sup> <a name="PartitionNumInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNumInput"></a>

```go
func PartitionNumInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdInput`<sup>Optional</sup> <a name="SecurityGroupIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupIdInput"></a>

```go
func SecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SpecificationInput`<sup>Optional</sup> <a name="SpecificationInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specificationInput"></a>

```go
func SpecificationInput() *string
```

- *Type:* *string

---

##### `StorageSpaceInput`<sup>Optional</sup> <a name="StorageSpaceInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpaceInput"></a>

```go
func StorageSpaceInput() *f64
```

- *Type:* *f64

---

##### `StorageSpecCodeInput`<sup>Optional</sup> <a name="StorageSpecCodeInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCodeInput"></a>

```go
func StorageSpecCodeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AccessUser`<sup>Required</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.accessUser"></a>

```go
func AccessUser() *string
```

- *Type:* *string

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.availableZones"></a>

```go
func AvailableZones() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaintainBegin`<sup>Required</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainBegin"></a>

```go
func MaintainBegin() *string
```

- *Type:* *string

---

##### `MaintainEnd`<sup>Required</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.maintainEnd"></a>

```go
func MaintainEnd() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionNum`<sup>Required</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.partitionNum"></a>

```go
func PartitionNum() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.retentionPolicy"></a>

```go
func RetentionPolicy() *string
```

- *Type:* *string

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.securityGroupId"></a>

```go
func SecurityGroupId() *string
```

- *Type:* *string

---

##### `Specification`<sup>Required</sup> <a name="Specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.specification"></a>

```go
func Specification() *string
```

- *Type:* *string

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpace"></a>

```go
func StorageSpace() *f64
```

- *Type:* *f64

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.storageSpecCode"></a>

```go
func StorageSpecCode() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsInstanceV1Config <a name="DmsInstanceV1Config" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dmsinstancev1"

&dmsinstancev1.DmsInstanceV1Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailableZones: *[]*string,
	Engine: *string,
	EngineVersion: *string,
	Name: *string,
	ProductId: *string,
	SecurityGroupId: *string,
	StorageSpace: *f64,
	StorageSpecCode: *string,
	SubnetId: *string,
	VpcId: *string,
	AccessUser: *string,
	Description: *string,
	Id: *string,
	MaintainBegin: *string,
	MaintainEnd: *string,
	PartitionNum: *f64,
	Password: *string,
	RetentionPolicy: *string,
	Specification: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.availableZones">AvailableZones</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#available_zones DmsInstanceV1#available_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engine">Engine</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#engine DmsInstanceV1#engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#engine_version DmsInstanceV1#engine_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#name DmsInstanceV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#product_id DmsInstanceV1#product_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.securityGroupId">SecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpace">StorageSpace</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#storage_space DmsInstanceV1#storage_space}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpecCode">StorageSpecCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.accessUser">AccessUser</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#access_user DmsInstanceV1#access_user}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#description DmsInstanceV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#id DmsInstanceV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainBegin">MaintainBegin</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainEnd">MaintainEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.partitionNum">PartitionNum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#partition_num DmsInstanceV1#partition_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#password DmsInstanceV1#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.retentionPolicy">RetentionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.specification">Specification</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#specification DmsInstanceV1#specification}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailableZones`<sup>Required</sup> <a name="AvailableZones" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.availableZones"></a>

```go
AvailableZones *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#available_zones DmsInstanceV1#available_zones}.

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#engine DmsInstanceV1#engine}.

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#engine_version DmsInstanceV1#engine_version}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#name DmsInstanceV1#name}.

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#product_id DmsInstanceV1#product_id}.

---

##### `SecurityGroupId`<sup>Required</sup> <a name="SecurityGroupId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.securityGroupId"></a>

```go
SecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#security_group_id DmsInstanceV1#security_group_id}.

---

##### `StorageSpace`<sup>Required</sup> <a name="StorageSpace" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpace"></a>

```go
StorageSpace *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#storage_space DmsInstanceV1#storage_space}.

---

##### `StorageSpecCode`<sup>Required</sup> <a name="StorageSpecCode" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.storageSpecCode"></a>

```go
StorageSpecCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#storage_spec_code DmsInstanceV1#storage_spec_code}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#subnet_id DmsInstanceV1#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#vpc_id DmsInstanceV1#vpc_id}.

---

##### `AccessUser`<sup>Optional</sup> <a name="AccessUser" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.accessUser"></a>

```go
AccessUser *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#access_user DmsInstanceV1#access_user}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#description DmsInstanceV1#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#id DmsInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaintainBegin`<sup>Optional</sup> <a name="MaintainBegin" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainBegin"></a>

```go
MaintainBegin *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#maintain_begin DmsInstanceV1#maintain_begin}.

---

##### `MaintainEnd`<sup>Optional</sup> <a name="MaintainEnd" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.maintainEnd"></a>

```go
MaintainEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#maintain_end DmsInstanceV1#maintain_end}.

---

##### `PartitionNum`<sup>Optional</sup> <a name="PartitionNum" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.partitionNum"></a>

```go
PartitionNum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#partition_num DmsInstanceV1#partition_num}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#password DmsInstanceV1#password}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.retentionPolicy"></a>

```go
RetentionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#retention_policy DmsInstanceV1#retention_policy}.

---

##### `Specification`<sup>Optional</sup> <a name="Specification" id="@cdktf/provider-opentelekomcloud.dmsInstanceV1.DmsInstanceV1Config.property.specification"></a>

```go
Specification *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/dms_instance_v1#specification DmsInstanceV1#specification}.

---



